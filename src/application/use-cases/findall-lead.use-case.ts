import { Observable, map } from 'rxjs';
import { IResponse, ILeadsService } from '../../domain/interfaces';
import { LeadDomainEntityBase } from '../../domain/entities';

export class FindAllLeadUseCase<
  Response extends IResponse<LeadDomainEntityBase[]> = IResponse<
    LeadDomainEntityBase[]
  >,
> {
  constructor(private readonly leadsService: ILeadsService) {}

  /**
   * > The `execute` function returns an observable of type `Response` that is the result of the
   * `executeCommand` function
   * @returns An Observable of type Response.
   */
  execute(): Observable<Response> {
    return this.executeCommand().pipe(
      map(
        (value: LeadDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * > The function executes the aggregate root's command and returns the aggregate root's domain
   * entities
   * @returns Observable<LeadDomainEntityBase[] | null>
   */
  private executeCommand(): Observable<LeadDomainEntityBase[] | null> {
    return this.executeInvoiceAggregateRoot();
  }

  /**
   * > It returns an observable of an array of lead domain entities or null
   * @returns An Observable of an array of LeadDomainEntityBase objects or null.
   */
  private executeInvoiceAggregateRoot(): Observable<
    LeadDomainEntityBase[] | null
  > {
    return this.leadsService.findAll();
  }
}
