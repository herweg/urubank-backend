import { Observable, map } from 'rxjs';
import { IFindAllLeadCommand } from '../../domain/commands';
import { IResponse, ILeadsService } from '../../domain/interfaces';
import { LeadDomainEntityBase } from '../../domain/entities';

export class FindAllLeadUseCase<
  Command extends IFindAllLeadCommand = IFindAllLeadCommand,
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
    return this.leadsService.findAll(command.minDate, command.maxDate);
  }
}
