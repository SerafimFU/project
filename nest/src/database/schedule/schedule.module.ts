import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import { scheduleProviders } from './schedule.providers'
import { ScheduleService } from './schedule.service'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...scheduleProviders,
    ScheduleService,
  ],
  exports: [ScheduleService],
})
export class ScheduleModule {}