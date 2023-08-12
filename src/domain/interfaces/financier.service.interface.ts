import { FinancierDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface IFinanciersService<
  T extends FinancierDomainEntityBase = FinancierDomainEntityBase,
> {
  create(entity: T): Observable<T>;
  update(entity: T): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
}
