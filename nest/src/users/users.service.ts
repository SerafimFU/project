import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'a',
      password: 'a',
    },
    {
      userId: 2,
      username: 'zxcASDqwe',
      password: 'zxcASDqwe!23',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
