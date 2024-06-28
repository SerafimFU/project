import { Injectable, Inject } from '@nestjs/common'
import { DeepPartial, Repository } from 'typeorm'
import { Avatars } from './avatars.entity'

/* Список запросов к БД */

@Injectable()
export class AvatarsService {
  constructor(
    @Inject('AVATARS_REPOSITORY')
    private usersRepository: Repository<Avatars>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Avatars[]> {
    return this.usersRepository.find();
  }

  /* Find one по ID */
  findOne(id: number): Promise<Avatars> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  /* Удаление строки */
  async delete(id: number) {
    return await this.usersRepository.delete({
      id,
    })
  }

  /* Create новой строки */
  async saveAvatar(data: DeepPartial<Avatars>) {
    await this.usersRepository.save(data);
    return data
  }
}