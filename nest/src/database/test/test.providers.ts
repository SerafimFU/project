import { DataSource } from 'typeorm'
import { Users } from './test.entity'

/* Подклячение Data_Source */

export const testProviders = [
  {
    provide: 'TEST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];