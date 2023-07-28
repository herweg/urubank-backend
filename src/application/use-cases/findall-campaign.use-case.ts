import { Observable, map } from 'rxjs';
import { IResponse, ICampaignsService } from '../../domain/interfaces';
import { CampaignDomainEntityBase } from '../../domain/entities';

export class FindAllCampaignUseCase<
  Response extends IResponse<CampaignDomainEntityBase[]> = IResponse<
    CampaignDomainEntityBase[]
  >,
> {
  constructor(private readonly campaignsService: ICampaignsService) {}

  /**
   * > The `execute` function returns an observable of type `Response` that is the result of the
   * `executeCommand` function
   * @returns An Observable of type Response.
   */
  execute(): Observable<Response> {
    return this.executeCommand().pipe(
      map(
        (value: CampaignDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * > The function executes the aggregate root's command and returns the aggregate root's domain
   * entities
   * @returns Observable<CampaignDomainEntityBase[] | null>
   */
  private executeCommand(): Observable<CampaignDomainEntityBase[] | null> {
    return this.executeInvoiceAggregateRoot();
  }

  /**
   * > It returns an observable of an array of campaign domain entities or null
   * @returns An Observable of an array of CampaignDomainEntityBase objects or null.
   */
  private executeInvoiceAggregateRoot(): Observable<
    CampaignDomainEntityBase[] | null
  > {
    return this.campaignsService.findAll();
  }
}
