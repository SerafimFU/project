import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../database/users/users.service'
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
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

  /* Создание токена */
  async login(user: any) {
    const payload = { email: user.email, sub: user.id, name: user.name, surname: user.surname };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /* Функция Logout-а */
  async logout(user: any) {
    this.usersService.isActive(user.id, false);
    return {};
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
