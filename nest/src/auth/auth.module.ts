import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { TestModule } from '../database/test/test.module';
import { CreateUserDto } from './auth.create-user.dto';

/* Модули AUTH и установка времени действия токена */

@Module({
  imports: [
    TestModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, CreateUserDto],
  exports: [AuthService, CreateUserDto],
})
export class AuthModule {}
