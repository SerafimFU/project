import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Users } from './test.entity'
import { TEST_REPOSITORY } from './test.constants'

@Injectable()
export class TestService {
  constructor(
    @Inject('TEST_REPOSITORY')
    private testRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.testRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.testRepository.findOne({
      where: {
        id,
      },
    });
  }

  findEmail(email: string): Promise<Users> {
    return this.testRepository.findOne({
      where: {
        email,
      },
    });
  }

  findPhone(phone_number: string): Promise<Users> {
    return this.testRepository.findOne({
      where: {
        phone_number,
      },
    });
  }
}