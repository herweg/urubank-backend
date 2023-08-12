import { Observable, catchError, map } from 'rxjs';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ISumecService } from '../../domain/interfaces';
import { SumecDomainEntityBase } from '../../domain/entities';

/**
 * SumecService for communicate to sumec api
 *
 * @export
 * @class SumecService
 * @implements {ISumecService<SumecDomainEntityBase>}
 */
@Injectable()
export class SumecService implements ISumecService<SumecDomainEntityBase> {
  constructor(private readonly httpService: HttpService) {}

  getPreApproved(
    ci: string,
    age: string,
    salary: string,
  ): Observable<SumecDomainEntityBase> {
    const data = { CI: ci, EDAD: age, SUELDO: salary };
    return this.httpService
      .post<SumecDomainEntityBase>(
        process.env.SUMEC_API_URL + '/' + 'ClientePreAprobado',
        data,
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }

  getDuesForCapital(capital: string): Observable<SumecDomainEntityBase> {
    const data = { CAPITAL: capital };
    return this.httpService
      .post<SumecDomainEntityBase>(
        process.env.SUMEC_API_URL + '/' + 'CuotasParaCapital',
        data,
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
