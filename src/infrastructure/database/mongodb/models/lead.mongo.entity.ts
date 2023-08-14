import { Entity, Column, ObjectIdColumn } from 'typeorm';
import {
  CampaignDomainEntityBase,
  LeadDomainEntityBase,
  UserDomainEntityBase,
} from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('leads')
export class LeadMongoEntity extends LeadDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  campaignId: string | CampaignDomainEntityBase;

  @Column()
  userId: string | UserDomainEntityBase;

  @Column()
  status: string;

  @Column()
  amount: string;

  @Column()
  finalAmount: string;

  @Column()
  quotas: string;

  @Column()
  quotasAmount: string;

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
