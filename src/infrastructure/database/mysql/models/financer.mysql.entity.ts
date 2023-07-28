import { Entity, Column } from 'typeorm';
import { FinancierDomainEntityBase } from '../../../../domain/entities';

@Entity('financiers')
export class FinancierMysqlEntity extends FinancierDomainEntityBase {
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
