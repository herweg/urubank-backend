import { Entity, Column } from 'typeorm';
import {
  LeadDomainEntityBase,
  CampaignDomainEntityBase,
  UserDomainEntityBase,
} from '../../../../domain/entities';

@Entity('leads')
export class LeadMysqlEntity extends LeadDomainEntityBase {
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
  documentBackPhoto: string;

  @Column()
  frontPhoto: string;

  @Column()
  invoicePhoto: string;

  @Column()
  createdAt: number;

  @Column()
  completedAt: number;
}
