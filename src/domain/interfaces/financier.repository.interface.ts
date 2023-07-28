import { FinancierDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface IFinanciersRepository<
  T extends FinancierDomainEntityBase = FinancierDomainEntityBase,
> {
  create(entity: FinancierDomainEntityBase): Observable<T>;
  update(entity: FinancierDomainEntityBase): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
}
