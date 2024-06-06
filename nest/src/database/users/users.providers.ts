import { DataSource } from 'typeorm'
import { Users } from './users.entity'

/* Подключение Data_Source */

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];