import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './database/users/users.module';
import { AvatarsModule } from './database/avatars/avatars.module';

@Module({
  imports: [AuthModule, DatabaseModule, UsersModule, AvatarsModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
