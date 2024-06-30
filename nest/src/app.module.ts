import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './database/users/users.module';
import { AvatarsModule } from './database/avatars/avatars.module';
import { GroupsModule } from './database/groups/groups.module';
import { Proxy_group_scheduleModule } from './database/proxy_group-schedule/proxy_group-schedule.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [AuthModule, DatabaseModule, UsersModule, AvatarsModule, GroupsModule, Proxy_group_scheduleModule, ScheduleModule.forRoot(), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
  }),],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
