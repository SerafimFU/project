/*
import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      name: 'Ivan',
      surname: 'Ivanov',
      username: 'zxcASDqwe',
      phone: '123123123',
      password: 'zxcASDqwe!23',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async findTwo(username: string): Promise<User | undefined> {
    return this.users.find(user => user.phone === username);
  }
} 
*/
