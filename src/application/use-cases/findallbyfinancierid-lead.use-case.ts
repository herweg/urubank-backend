import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IFindAllByFinancierIdLeadCommand } from '../../domain/commands';
import { IResponse, ILeadsService } from '../../domain/interfaces';
import { LeadDomainEntityBase } from '../../domain/entities';

export class FindAllByFinancierIdLeadUseCase<
  Command extends IFindAllByFinancierIdLeadCommand = IFindAllByFinancierIdLeadCommand,
  Response extends IResponse<LeadDomainEntityBase[]> = IResponse<
    LeadDomainEntityBase[]
  >,
> {
  constructor(private readonly leadsService: ILeadsService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: LeadDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<LeadDomainEntityBase[] | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<LeadDomainEntityBase[] | null> {
    if (!command.financierId || command.financierId.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the lead exists, then return the lead, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<LeadDomainEntityBase[] | null> {
    return this.leadsService.findAllByFinancierId(command.financierId);
  }
}
