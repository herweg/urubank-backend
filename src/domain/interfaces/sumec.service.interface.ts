import { SumecDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface ISumecService<
  T extends SumecDomainEntityBase = SumecDomainEntityBase,
> {
  getPreApproved(ci: string, age: string, salary: string): Observable<T>;
  getDuesForCapital(capital: string): Observable<T>;
}
