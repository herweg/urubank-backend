import { Observable, map } from 'rxjs';
import { IUpdateCampaignCommand } from '../../domain/commands';
import { IResponse, ICampaignsService } from '../../domain/interfaces';
import { CampaignDomainEntityBase } from '../../domain/entities';

export class UpdateCampaignUseCase<
  Command extends IUpdateCampaignCommand = IUpdateCampaignCommand,
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
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, updates the entity, sets the id, deletes the createdAt property, and then
   * executes the aggregate root
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<CampaignDomainEntityBase | null> {
    const entity = this.updateEntity(command);
    entity.id = command.id;
    return this.executeInvoiceAggregateRoot(entity);
  }

  /**
   * This function takes a command and returns a validated campaign.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A CampaignDomainEntityBase
   */
  private updateEntity(command: Command): CampaignDomainEntityBase {
    return new CampaignDomainEntityBase(command);
  }

  /**
   * This function is responsible for updating the campaign's invoice aggregate root.
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase - this is the aggregate root that we're
   * going to be updating.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: CampaignDomainEntityBase,
  ): Observable<CampaignDomainEntityBase | null> {
    return this.campaignsService.update(entity);
  }
}
