import { LeadDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface ILeadsService<
  T extends LeadDomainEntityBase = LeadDomainEntityBase,
> {
  create(entity: LeadDomainEntityBase): Observable<T>;
  update(entity: LeadDomainEntityBase): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
}
