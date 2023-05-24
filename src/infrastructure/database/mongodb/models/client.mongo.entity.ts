import { Entity, Column } from 'typeorm';
import { ClientDomainEntityBase } from '../../../../domain/entities';

@Entity('client')
export class ClientMongoEntity extends ClientDomainEntityBase {
  @Column()
  id: string;

  @Column()
  typeClient: number;

  @Column()
  fullName: string;

  @Column()
  status: number;

  @Column()
  document: string;

  @Column()
  createdAt: number;

  @Column()
  completedAt: number;
}
