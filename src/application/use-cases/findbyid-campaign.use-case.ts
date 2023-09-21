import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IFindByIdCampaignCommand } from '../../domain/commands';
import { IResponse, ICampaignsService } from '../../domain/interfaces';
import { CampaignDomainEntityBase } from '../../domain/entities';

export class FindByIdCampaignUseCase<
  Command extends IFindByIdCampaignCommand = IFindByIdCampaignCommand,
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
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<CampaignDomainEntityBase | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<CampaignDomainEntityBase | null> {
    if (!command.id || command.id.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the campaign exists, then return the campaign, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<CampaignDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<CampaignDomainEntityBase | null> {
    return this.campaignsService.findById(command.id);
  }
}
