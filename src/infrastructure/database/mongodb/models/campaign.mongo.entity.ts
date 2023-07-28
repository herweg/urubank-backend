import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { CampaignDomainEntityBase } from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('campaigns')
export class CampaignMongoEntity extends CampaignDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  financerId: string;

  @Column()
  brandName: string;

  @Column()
  phone: string;
}
