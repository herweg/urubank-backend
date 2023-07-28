import { Observable, map } from 'rxjs';
import { IUpdateLeadCommand } from '../../domain/commands';
import { IResponse, ILeadsService } from '../../domain/interfaces';
import { LeadDomainEntityBase } from '../../domain/entities';

export class UpdateLeadUseCase<
  Command extends IUpdateLeadCommand = IUpdateLeadCommand,
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
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, updates the entity, sets the id, deletes the createdAt property, and then
   * executes the aggregate root
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<LeadDomainEntityBase | null> {
    const entity = this.updateEntity(command);
    entity.id = command.id;
    delete entity.createdAt;
    return this.executeInvoiceAggregateRoot(entity);
  }

  /**
   * This function takes a command and returns a validated lead.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A LeadDomainEntityBase
   */
  private updateEntity(command: Command): LeadDomainEntityBase {
    return new LeadDomainEntityBase(command);
  }

  /**
   * This function is responsible for updating the lead's invoice aggregate root.
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase - this is the aggregate root that we're
   * going to be updating.
   * @returns Observable<LeadDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: LeadDomainEntityBase,
  ): Observable<LeadDomainEntityBase | null> {
    return this.leadsService.update(entity);
  }
}
