import { Entity, Column } from 'typeorm';
import { UserDomainEntityBase } from '../../../../domain/entities';

@Entity('user')
export class UserMysqlEntity extends UserDomainEntityBase {
  @Column()
  id: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  age: string;

  @Column()
  salary: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  origin: string[];

  @Column()
  createdAt: number;

  @Column()
  completedAt: number;
}
