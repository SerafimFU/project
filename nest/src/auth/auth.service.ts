import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../database/users/users.service'
import { ScheduleService } from 'src/database/schedule/schedule.service';
import { AvatarsService } from 'src/database/avatars/avatars.service';
import { Cron } from '@nestjs/schedule';
import { dirname } from 'path';
import * as fs from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private scheduleService: ScheduleService,
    private avatarService: AvatarsService,
  ) {}
  
  private readonly logger = new Logger(AuthService.name);

  /* Функция авторизации пользователя */
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findEmail(username);
    const userPhone = await this.usersService.findPhone(username);
    if ((user != null) || (userPhone != null)) {
      if (user && user.password === pass) {
        const { password, ...result } = user;
        this.usersService.isActive(user.id, true);
        return result;
      } else { 
        if (userPhone && userPhone.password === pass) {
        const { password, ...result } = userPhone;
        this.usersService.isActive(userPhone.id, true);
        return result;
        } else {
          throw new HttpException('Incorrect Username or password', HttpStatus.UNAUTHORIZED);
        }
      }
    } else {
      throw new HttpException('Incorrect Username or password', HttpStatus.UNAUTHORIZED);
    }
  }

  /* Создание токена Login */
  async login(user: any) {
    const payload = { email: user.email, sub: user.id, name: user.name, surname: user.surname, phone: user.phone_number, group_id: user.group_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /* Создание токена Edit_Profile */
  async edit_profile(user: any, createUserDto) {
    const a = await this.usersService.findOne(user.id);
    if ((a.password === createUserDto.password) && ((createUserDto.email != '') || (createUserDto.phone_number != ''))) {
      if ((createUserDto.email != '') && (createUserDto.email != a.email)) {
        this.usersService.email_update(user.id, createUserDto.email)
      }
      if ((createUserDto.phone_number != '') && (createUserDto.phone_number != a.phone_number)) {
        this.usersService.phone_update(user.id, createUserDto.phone_number)
      }
      const payload = { email: user.email, sub: user.id, name: user.name, surname: user.surname, phone: user.phone_number, group_id: user.group_id };
      return {
        access_token: this.jwtService.sign(payload),
      }
    } else {
      throw new HttpException('Client error', HttpStatus.CONFLICT);
    }
  }

  /* Функция Logout-а */
  async logout(user: any) {
    this.usersService.isActive(user.id, false);
    return {};
  }

  /* Функция получения данных Timetable */
  async timetable(user: any) {
    const object = await this.usersService.findOne(user.id);
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

    const data = await this.scheduleService.findLessonsToday(object.group_id, currentDate);
    for (let i = 0; i < data.length - 1; i += 1) {
      let indexMin = i;
      for (let j = i + 1; j < data.length; j += 1) {
        if (data[j].lessonTime < data[indexMin].lessonTime) {
          indexMin = j;
        }
      }
      const temporary = data[i];
      data[i] = data[indexMin];
      data[indexMin] = temporary;
    }
    return {
      data,
    };
  }

  /* Функция перехода по датам в Timetable + выборка дат в порядке возрастания */
  async dateChange(user: any, changeDateDto) {
    const object = await this.usersService.findOne(user.id);
    const data = await this.scheduleService.findLessonsToday(object.group_id, changeDateDto.data);
      for (let i = 0; i < data.length - 1; i += 1) {
        let indexMin = i;
        for (let j = i + 1; j < data.length; j += 1) {
          if (data[j].lessonTime < data[indexMin].lessonTime) {
            indexMin = j;
          }
        }
        const temporary = data[i];
        data[i] = data[indexMin];
        data[indexMin] = temporary;
      }
    return {
      data,
    };
  }

  /* Функция регистрации пользователя */
  async signup(createUserDto) {
    const dbemail = await this.usersService.findEmail(createUserDto.email);
    const dbphone = await this.usersService.findPhone(createUserDto.phone_number);
    if ((dbemail != null) || (dbphone != null)) {
      throw new HttpException('This Email or phone number already used', HttpStatus.CONFLICT);
    } else {
      this.usersService.createUser({ name: createUserDto.username, surname: createUserDto.surname, email: createUserDto.email, phone_number: createUserDto.phone_number, password: createUserDto.password });
    }
  }

  /* Функция сохранения аватара */
  async saveAvatar(user: any, file: any) {
    const filename_extension = file.filename.split('.').reverse()[0];
    const filename = file.filename.split('.').reverse()[1];
    let path = dirname(file.path);
    let path2 = path.split('/').reverse();
    path2.pop(); 
    path = path2.reverse().join('/');
    if ((filename_extension == null) || (filename == null) || (path == null)) {
      throw new HttpException('Unable to read file', HttpStatus.UNPROCESSABLE_ENTITY);
    } else {
      const avatar = await this.avatarService.saveAvatar({ filename: filename, filename_extension: filename_extension, path: path });
      const uavatar = await this.usersService.findOne(user.id);
      if (uavatar.avatar_id != null) {
        const old_avatar = await this.avatarService.findOne(uavatar.avatar_id)
        fs.unlink(`./public/${old_avatar.path}/${old_avatar.filename}.${old_avatar.filename_extension}`, (err) => {
          if (err) {
          console.log(err);
          }
        });
        this.avatarService.delete(uavatar.avatar_id); 
      } 
      this.usersService.newAvatar(user.id, avatar.id);
      return avatar;
    }
  }

  /* Функция записи времени последней активности */
  async activeTime(user: any) {
    var dateParametr = new Date();
    dateParametr.setHours(dateParametr.getHours() + 3)
    this.usersService.activeTime(user.id, dateParametr)
    return {};
  }

  /* Функция интервальной проверки активности пользователя */
  @Cron('0 * * * * *')
  async handleCron() {
    var dateParametr = new Date();
    dateParametr.setHours(dateParametr.getHours() + 3)
    dateParametr.setMinutes(dateParametr.getMinutes() - 15)
    //dateParametr.setSeconds(dateParametr.getSeconds() - 60);
    //dateParametr.setDate(dateParametr.getDate() - 1);
    await this.usersService.checkActivity(dateParametr);
  }
} 
