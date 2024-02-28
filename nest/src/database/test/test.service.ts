import { Injectable, Inject } from '@nestjs/common'
import { Repository, DeepPartial } from 'typeorm'
import { Users } from './test.entity'

/* Список запросов к БД */

@Injectable()
export class TestService {
  constructor(
    @Inject('TEST_REPOSITORY')
    private testRepository: Repository<Users>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Users[]> {
    return this.testRepository.find();
  }

  /* Find one по ID */
  findOne(id: number): Promise<Users> {
    return this.testRepository.findOne({
      where: {
        id,
      },
    });
  }

  /* Find one по Email */
  findEmail(email: string): Promise<Users> {
    return this.testRepository.findOne({
      where: {
        email,
      },
    });
  }

  /* Find one по Phone */
  findPhone(phone_number: string): Promise<Users> {
    return this.testRepository.findOne({
      where: {
        phone_number,
      },
    });
  }

  /* Create новой строки */
  async createUser(data: DeepPartial<Users> ) {
    return await this.testRepository.save(data);
  }
  
  /* Смена состояния активности */
  async isActive(id: number, isActive: boolean) {
    return await this.testRepository.update({
      id,
    }, {
      isActive,
    });
  }
}