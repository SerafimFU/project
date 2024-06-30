import { DataSource } from 'typeorm'
import { Groups } from './groups.entity';

/* Подключение Data_Source */

export const groupsProviders = [
  {
    provide: 'GROUPS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Groups),
    inject: ['DATA_SOURCE'],
  },
];