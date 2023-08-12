import { Observable, catchError, map } from 'rxjs';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ISumecQuotes, ISumecService } from '../../domain/interfaces';
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
        map((res) => {
          const quotes = res.CuotasParaCapital as unknown as ISumecQuotes;
          const array: string[] = [];
          array.push(
            quotes[1],
            quotes[2],
            quotes[3],
            quotes[4],
            quotes[5],
            quotes[6],
            quotes[7],
            quotes[8],
            quotes[9],
            quotes[10],
            quotes[11],
            quotes[12],
            quotes[13],
            quotes[14],
            quotes[15],
            quotes[16],
            quotes[17],
            quotes[18],
            quotes[24],
          );
          return new SumecDomainEntityBase({
            CuotasParaCapital: array,
          });
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
