import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

/* Структура таблицы Proxy_group_schedule в БД */

@Entity()
export class Proxy_group_schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 6 })
  group_id: string;

  @Column({ type: "int" })
  lesson_id: number;
}