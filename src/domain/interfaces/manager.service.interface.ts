import { ManagerDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface IManagersService<
  T extends ManagerDomainEntityBase = ManagerDomainEntityBase,
> {
  create(entity: T): Observable<T>;
  update(entity: T): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(minDate?: number, maxDate?: number): Observable<T[]>;
  findById(id: string): Observable<T>;
  findByEmail(email: string): Observable<T>;
}
