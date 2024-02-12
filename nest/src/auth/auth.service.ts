import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TestService } from '../database/test/test.service'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private testService: TestService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.testService.findEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    } else { 
        const user = await this.testService.findPhone(username);
        if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
        }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId, name: user.name, surname: user.surname };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
} 
