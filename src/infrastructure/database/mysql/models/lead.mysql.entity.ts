import { Entity, Column } from 'typeorm';
import { LeadDomainEntityBase } from '../../../../domain/entities';

@Entity('leads')
export class LeadMysqlEntity extends LeadDomainEntityBase {
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
  finalAmount: string;

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
