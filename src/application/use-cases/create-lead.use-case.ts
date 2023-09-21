import { Observable, map } from 'rxjs';
import { ICreateLeadCommand } from '../../domain/commands';
import { IResponse, ILeadsService } from '../../domain/interfaces';
import { LeadDomainEntityBase } from '../../domain/entities';

export class CreateLeadUseCase<
  Command extends ICreateLeadCommand = ICreateLeadCommand,
  Response extends IResponse<LeadDomainEntityBase> = IResponse<LeadDomainEntityBase>,
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
        (value: LeadDomainEntityBase) =>
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
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<LeadDomainEntityBase | null> {
    return this.executeInvoiceAggregateRoot(this.createEntity(command));
  }

  /**
   * Create a new lead entity from the command, validate it, and return it.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A LeadDomainEntityBase
   */
  private createEntity(command: Command): LeadDomainEntityBase {
    return new LeadDomainEntityBase(command);
  }

  /**
   * > This function is responsible for creating a new lead
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase - this is the entity that is being
   * created.
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: LeadDomainEntityBase,
  ): Observable<LeadDomainEntityBase | null> {
    return this.leadsService.create(entity);
  }
}
