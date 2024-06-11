import { Injectable, Inject } from '@nestjs/common'
import { Repository, DeepPartial, Raw } from 'typeorm'
import { Schedule } from './schedule.entity'

/* Список запросов к БД */

@Injectable()
export class ScheduleService {
  constructor(
    @Inject('SCHEDULE_REPOSITORY')
    private scheduleRepository: Repository<Schedule>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Schedule[]> {
    return this.scheduleRepository.find();
  }
  
  /* Find one по ID */
  findOne(id: number): Promise<Schedule> {
    return this.scheduleRepository.findOne({
      where: {
        id,
      },
    });
  }

  /* Выборка расписания группы */
  async findLessons(group_id: number): Promise<Schedule[]> {
    return this.scheduleRepository.find({
      where: {
        group_id,
      },
    });
  }
}