import { DataSource } from 'typeorm'
import { Users } from './test.entity'
import { TEST_REPOSITORY } from './test.constants'
import { DATA_SOURCE } from './test.constants'

export const testProviders = [
  {
    provide: 'TEST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];