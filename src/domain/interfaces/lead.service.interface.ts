import { LeadDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface ILeadsService<
  T extends LeadDomainEntityBase = LeadDomainEntityBase,
> {
  create(entity: T): Observable<T>;
  update(entity: T): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
  findActiveLeadsByUserId(userId: string): Observable<T[]>;
}
