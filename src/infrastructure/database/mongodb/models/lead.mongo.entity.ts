import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { LeadDomainEntityBase } from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('leads')
export class LeadMongoEntity extends LeadDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  campaignId: string;

  @Column()
  userId: string;

  @Column()
  status: string;

  @Column()
  amount: string;

  @Column()
  quotas: string;

  @Column()
  clearing: boolean;

  @Column()
  documentPhoto: string;

  @Column()
  frontPhoto: string;

  @Column()
  invoicePhoto: string;

  @Column()
  createdAt: number;

  @Column()
  completedAt: number;
}
