import { Injectable, Inject } from '@nestjs/common'
import { Repository, DeepPartial, Raw } from 'typeorm'
import { Users } from './users.entity'

/* Список запросов к БД */

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  /* Find one по ID */
  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  /* Find one по Email */
  findEmail(email: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  /* Find one по Phone */
  findPhone(phone_number: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: {
        phone_number,
      },
    });
  }

  /* Create новой строки */
  async createUser(data: DeepPartial<Users> ) {
    return await this.usersRepository.save(data);
  }
  
  /* Смена состояния активности */
  async isActive(id: number, isActive: boolean) {
    return await this.usersRepository.update({
      id,
    }, {
      isActive,
    });
  }

  /* Редактирование данных пользователя */
    async email_update(id: number, email: string) {
      return await this.usersRepository.update({
        id,
      }, {
        email,
      });
    }

    async phone_update(id: number, phone_number: string) {
      return await this.usersRepository.update({
        id,
      }, {
        phone_number,
      });
    }

  /* Время последней активности */
  async activeTime(id: number, activeTime: Date) {
    return await this.usersRepository.update({
      id,
    }, {
      activeTime,
    });
  }

  /* Интервальная проверка со сменой состояния активности неактивных пользователей */
  async checkActivity(dateParametr) {
    await this.usersRepository.update({
      isActive: true,
      activeTime: Raw((alias) => `${alias} < :date`, { date: dateParametr }),
    }, {
      isActive: false,
    });
  }
}