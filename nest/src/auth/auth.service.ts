import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../database/users/users.service'
import { ScheduleService } from 'src/database/schedule/schedule.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private scheduleService: ScheduleService,
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
    const payload = { email: user.email, sub: user.id, name: user.name, surname: user.surname, phone: user.phone_number };
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
      const payload = { email: user.email, sub: user.id, name: user.name, surname: user.surname, phone: user.phone_number };
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

  /* Функция записи времени последней активности */
  async activeTime(user: any) {
    this.usersService.activeTime(user.id, new Date(Date.now()))
    return {};
  }

  /* Функция интервальной проверки активности пользователя */
  @Cron('0 * * * * *')
  async handleCron() {
    var dateParametr = new Date();
    dateParametr.setMinutes(dateParametr.getMinutes() - 15)
    //dateParametr.setSeconds(dateParametr.getSeconds() - 60);
    //dateParametr.setDate(dateParametr.getDate() - 1);
    await this.usersService.checkActivity(dateParametr);
  }
} 
