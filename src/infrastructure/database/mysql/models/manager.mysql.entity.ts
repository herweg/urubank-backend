import { Entity, Column } from 'typeorm';
import { ManagerDomainEntityBase } from '../../../../domain/entities';

@Entity('managers')
export class ManagerMysqlEntity extends ManagerDomainEntityBase {
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
