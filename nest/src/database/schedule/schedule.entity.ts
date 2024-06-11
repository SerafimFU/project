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

  @Column({ type: "smallint" })
  group_id: number;

  @Column({ type: "varchar", length: 40 })
  subject: string;

  @Column({ type: "varchar", length: 20 })
  place: string;

  @Column({ type: "varchar", length: 20, default: null })
  teacher: string;

  @Column({ type: "varchar", length: 100, default: null })
  theme: string;
}