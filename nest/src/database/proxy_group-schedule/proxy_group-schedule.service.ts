import { Injectable, Inject } from '@nestjs/common'
import { Repository, DeepPartial, Raw } from 'typeorm'
import { Proxy_group_schedule } from './proxy_group-schedule.entity'

/* Список запросов к БД */

@Injectable()
export class Proxy_group_scheduleService {
  constructor(
    @Inject('PROXY_GROUP_SCHEDULE_REPOSITORY')
    private scheduleRepository: Repository<Proxy_group_schedule>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Proxy_group_schedule[]> {
    return this.scheduleRepository.find();
  }
  
  /* Find one по ID */
  findOne(id: number): Promise<Proxy_group_schedule> {
    return this.scheduleRepository.findOne({
      where: {
        id,
      },
    });
  }

  /* Выборка расписания */
  async findSchedule(group_id: string): Promise<Proxy_group_schedule[]> {
    return this.scheduleRepository.find({
      select: {
        lesson_id: true,
    },
      where: {
        group_id,
      }, 
    });
  }
  /* Выборка группы */
  async findGroup(lesson_id: number): Promise<Proxy_group_schedule[]> {
    return this.scheduleRepository.find({
      select: {
        group_id: true,
    },
      where: {
        lesson_id,
      }, 
    });
  }
}