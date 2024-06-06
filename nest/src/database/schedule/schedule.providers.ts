import { DataSource } from 'typeorm'
import { Schedule } from './schedule.entity'

/* Подключение Data_Source */

export const scheduleProviders = [
  {
    provide: 'SCHEDULE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Schedule),
    inject: ['DATA_SOURCE'],
  },
];