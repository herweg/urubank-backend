import { Observable, map } from 'rxjs';
import { IResponse, IFinanciersService } from '../../domain/interfaces';
import { FinancierDomainEntityBase } from '../../domain/entities';

export class FindAllFinancierUseCase<
  Response extends IResponse<FinancierDomainEntityBase[]> = IResponse<
    FinancierDomainEntityBase[]
  >,
> {
  constructor(private readonly financiersService: IFinanciersService) {}

  /**
   * > The `execute` function returns an observable of type `Response` that is the result of the
   * `executeCommand` function
   * @returns An Observable of type Response.
   */
  execute(): Observable<Response> {
    return this.executeCommand().pipe(
      map(
        (value: FinancierDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * > The function executes the aggregate root's command and returns the aggregate root's domain
   * entities
   * @returns Observable<FinancierDomainEntityBase[] | null>
   */
  private executeCommand(): Observable<FinancierDomainEntityBase[] | null> {
    return this.executeInvoiceAggregateRoot();
  }

  /**
   * > It returns an observable of an array of financier domain entities or null
   * @returns An Observable of an array of FinancierDomainEntityBase objects or null.
   */
  private executeInvoiceAggregateRoot(): Observable<
    FinancierDomainEntityBase[] | null
  > {
    return this.financiersService.findAll();
  }
}
