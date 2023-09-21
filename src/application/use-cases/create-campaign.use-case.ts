import { Observable, map } from 'rxjs';
import { ICreateCampaignCommand } from '../../domain/commands';
import { IResponse, ICampaignsService } from '../../domain/interfaces';
import { CampaignDomainEntityBase } from '../../domain/entities';

export class CreateCampaignUseCase<
  Command extends ICreateCampaignCommand = ICreateCampaignCommand,
  Response extends IResponse<CampaignDomainEntityBase> = IResponse<CampaignDomainEntityBase>,
> {
  constructor(private readonly campaignsService: ICampaignsService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: CampaignDomainEntityBase) =>
          ({ success: value ? true : false, data: value } as Response),
      ),
    );
  }

  /**
   * "This function executes a command on the aggregate root, and returns an observable of the aggregate
   * root's state."
   *
   * The function takes a command as a parameter, and returns an observable of the aggregate root's state
   * @param {Command} command - Command - The command that was sent to the command handler.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<CampaignDomainEntityBase | null> {
    return this.executeInvoiceAggregateRoot(this.createEntity(command));
  }

  /**
   * Create a new campaign entity from the command, validate it, and return it.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A CampaignDomainEntityBase
   */
  private createEntity(command: Command): CampaignDomainEntityBase {
    return new CampaignDomainEntityBase(command);
  }

  /**
   * > This function is responsible for creating a new campaign
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase - this is the entity that is being
   * created.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: CampaignDomainEntityBase,
  ): Observable<CampaignDomainEntityBase | null> {
    return this.campaignsService.create(entity);
  }
}
