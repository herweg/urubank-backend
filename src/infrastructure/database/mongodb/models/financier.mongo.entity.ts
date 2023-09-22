import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { FinancierDomainEntityBase } from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('financiers')
export class FinancierMongoEntity extends FinancierDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  brandName: string;

  @Column()
  phones: string[];

  @Column()
  emails: string[];

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  courtAddress: string;
}
