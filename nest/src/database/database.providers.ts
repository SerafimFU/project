import { DataSource } from 'typeorm'
import { Users } from './test/test.entity'

/* Установка соединения с базой данных */

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'host.docker.internal',
        port: 33306,
        username: 'test-nest',
        password: 'secret',
        database: 'test-nest',
        entities: [Users],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];