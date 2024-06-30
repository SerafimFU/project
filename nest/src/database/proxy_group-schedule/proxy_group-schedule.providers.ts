import { DataSource } from 'typeorm'
import { Proxy_group_schedule } from './proxy_group-schedule.entity'

/* Подключение Data_Source */

export const proxy_group_scheduleProviders = [
  {
    provide: 'PROXY_GROUP_SCHEDULE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Proxy_group_schedule),
    inject: ['DATA_SOURCE'],
  },
];