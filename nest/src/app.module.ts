import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { TestModule } from './database/test/test.module';

@Module({
  imports: [AuthModule, DatabaseModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
