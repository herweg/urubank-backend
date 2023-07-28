import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { UserDomainEntityBase } from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('users')
export class UserMongoEntity extends UserDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

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
