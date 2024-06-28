import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from '../database/users/users.module';
import { ScheduleModule } from 'src/database/schedule/schedule.module';
import { AvatarsModule } from 'src/database/avatars/avatars.module';
import { CreateUserDto } from './auth.create-user.dto';

/* Модули AUTH и установка времени действия токена */

@Module({
  imports: [
    UsersModule,
    ScheduleModule,
    AvatarsModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, CreateUserDto],
  exports: [AuthService, CreateUserDto],
})
export class AuthModule {}
