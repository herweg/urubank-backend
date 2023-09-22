import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ManagerDomainEntityBase } from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('managers')
export class ManagerMongoEntity extends ManagerDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  financierId: string;

  @Column()
  createdAt: number;
}
