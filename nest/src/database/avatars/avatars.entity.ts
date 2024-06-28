import { Entity, Column, PrimaryGeneratedColumn, Binary } from 'typeorm'

/* Структура таблицы AVATARS в БД */

@Entity()
export class Avatars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 36 })
  filename: string;

  @Column({ type: "varchar", length: 6 })
  filename_extension: string;

  @Column({ type: "varchar", length: 50 })
  path: string;
}