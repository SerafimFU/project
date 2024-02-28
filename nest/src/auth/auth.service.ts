import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TestService } from '../database/test/test.service'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private testService: TestService,
  ) {}
  
  /* Функция авторизации пользователя */
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.testService.findEmail(username);
    const userPhone = await this.testService.findPhone(username);
    if ((user != null) || (userPhone != null)) {
      if (user && user.password === pass) {
        const { password, ...result } = user;
        this.testService.isActive(user.id, true);
        return result;
      } else { 
        if (userPhone && userPhone.password === pass) {
        const { password, ...result } = userPhone;
        this.testService.isActive(userPhone.id, true);
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
    this.testService.isActive(user.id, false);
    return {};
  }

  /* Функция регистрации пользователя */
  async signup(createUserDto) {
    const dbemail = await this.testService.findEmail(createUserDto.email);
    const dbphone = await this.testService.findPhone(createUserDto.phone_number);
    if ((dbemail != null) || (dbphone != null)) {
      throw new HttpException('This Email or phone number already used', HttpStatus.CONFLICT);
    } else {
      this.testService.createUser({ name: createUserDto.username, surname: createUserDto.surname, email: createUserDto.email, phone_number: createUserDto.phone_number, password: createUserDto.password });
    }
  }

} 
