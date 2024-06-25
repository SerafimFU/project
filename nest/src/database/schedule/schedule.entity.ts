import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

/* Структура таблицы SCHEDULE в БД */

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  lessonTime: Date;

  @Column({ type: "varchar", length: 6 })
  group_id: string;

  @Column({ type: "varchar", length: 40 })
  subject: string;

  @Column({ type: "tinyint"})
  type: number;

  @Column({ type: "varchar", length: 20 })
  place: string;

  @Column({ type: "varchar", length: 20, default: null })
  teacher: string;

  @Column({ type: "varchar", length: 250, default: null })
  theme: string;
}