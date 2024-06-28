import { DataSource } from 'typeorm'
import { Avatars } from './avatars.entity';

/* Подключение Data_Source */

export const avatarsProviders = [
  {
    provide: 'AVATARS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Avatars),
    inject: ['DATA_SOURCE'],
  },
];