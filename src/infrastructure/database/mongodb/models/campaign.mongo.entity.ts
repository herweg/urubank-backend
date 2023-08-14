import { Entity, Column, ObjectIdColumn } from 'typeorm';
import {
  CampaignDomainEntityBase,
  FinancierDomainEntityBase,
} from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('campaigns')
export class CampaignMongoEntity extends CampaignDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  financerId: string | FinancierDomainEntityBase;

  @Column()
  brandName: string;

  @Column()
  phone: string;
}
