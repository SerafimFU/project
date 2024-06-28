import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

/* Структура таблицы USER в БД */

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 21 })
  name: string;

  @Column({ type: "varchar", length: 21 })
  surname: string;

  @Column({ type: "varchar", length: 319 })
  email: string;

  @Column({ type: "varchar", length: 22 })
  phone_number: string;

  @Column({ type: "varchar", length: 45 })
  password: string;

  @Column({ type: "varchar", length: 6 })
  group_id: string;

  @Column({ type: "int", default: null})
  avatar_id: number;

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: "timestamp", default: null })
  activeTime: Date;
}