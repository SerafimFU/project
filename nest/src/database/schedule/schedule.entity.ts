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
}