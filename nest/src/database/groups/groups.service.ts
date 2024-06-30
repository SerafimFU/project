import { Injectable, Inject } from '@nestjs/common'
import { DeepPartial, Repository } from 'typeorm'
import { Groups } from './groups.entity'

/* Список запросов к БД */

@Injectable()
export class GroupsService {
  constructor(
    @Inject('GROUPS_REPOSITORY')
    private usersRepository: Repository<Groups>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Groups[]> {
    return this.usersRepository.find();
  }

  /* Find one по ID */
  findOne(group_id: string): Promise<Groups> {
    return this.usersRepository.findOne({
      where: {
        group_id,
      },
    });
  }


  /* Create новой строки */
  async saveAvatar(data: DeepPartial<Groups>) {
    await this.usersRepository.save(data);
    return data
  }
}