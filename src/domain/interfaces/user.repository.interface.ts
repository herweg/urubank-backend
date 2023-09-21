import { UserDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface IUsersRepository<
  T extends UserDomainEntityBase = UserDomainEntityBase,
> {
  create(entity: T): Observable<T>;
  update(entity: T): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
  findByDocument(document: string): Observable<T>;
}
