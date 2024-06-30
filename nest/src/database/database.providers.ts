import { DataSource } from 'typeorm'
import { Users } from './users/users.entity'
import { Schedule } from './schedule/schedule.entity';
import { Avatars } from './avatars/avatars.entity';
import { Groups } from './groups/groups.entity';
import { Proxy_group_schedule } from './proxy_group-schedule/proxy_group-schedule.entity';

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
        entities: [Users, Schedule, Avatars, Groups, Proxy_group_schedule],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];