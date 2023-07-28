import { UserDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface IUsersRepository<
  T extends UserDomainEntityBase = UserDomainEntityBase,
> {
  create(entity: UserDomainEntityBase): Observable<T>;
  update(entity: UserDomainEntityBase): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
}
