import { Entity, Column, PrimaryColumn } from 'typeorm'

/* Структура таблицы Groups в БД */

@Entity()
export class Groups {
  @PrimaryColumn({ type: "varchar", length: 6 })
  group_id: string;

  @Column({ type: "int" })
  department_id: number;

  @Column({ type: "varchar", length: 50 })
  program: string;

  @Column({ type: "tinyint" })
  course: number;
}