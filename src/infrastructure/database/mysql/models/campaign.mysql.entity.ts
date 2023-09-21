import { Entity, Column } from 'typeorm';
import {
  CampaignDomainEntityBase,
  FinancierDomainEntityBase,
} from '../../../../domain/entities';

@Entity('campaigns')
export class CampaignMysqlEntity extends CampaignDomainEntityBase {
  @Column()
  id: string;

  @Column()
  financerId: string | FinancierDomainEntityBase;

  @Column()
  brandName: string;

  @Column()
  phone: string;
}
