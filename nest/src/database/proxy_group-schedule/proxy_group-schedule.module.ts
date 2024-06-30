import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import { proxy_group_scheduleProviders } from './proxy_group-schedule.providers'
import { Proxy_group_scheduleService } from './proxy_group-schedule.service'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...proxy_group_scheduleProviders,
    Proxy_group_scheduleService,
  ],
  exports: [Proxy_group_scheduleService],
})
export class Proxy_group_scheduleModule {}