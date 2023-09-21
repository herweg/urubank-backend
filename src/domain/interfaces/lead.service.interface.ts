import { LeadDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface ILeadsService<
  T extends LeadDomainEntityBase = LeadDomainEntityBase,
> {
  create(entity: T): Observable<T>;
  update(entity: T): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(minDate?: number, maxDate?: number): Observable<T[]>;
  findById(id: string): Observable<T>;
  findActiveLeadsByUserId(userId: string): Observable<T[]>;
  findAllByFinancierId(
    financierId: string,
    minDate?: number,
    maxDate?: number,
  ): Observable<T[]>;
}
