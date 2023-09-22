import { Observable, map } from 'rxjs';
import { IUpdateFinancierCommand } from '../../domain/commands';
import { IResponse, IFinanciersService } from '../../domain/interfaces';
import { FinancierDomainEntityBase } from '../../domain/entities';

export class UpdateFinancierUseCase<
  Command extends IUpdateFinancierCommand = IUpdateFinancierCommand,
  Response extends IResponse<FinancierDomainEntityBase> = IResponse<FinancierDomainEntityBase>,
> {
  constructor(private readonly financiersService: IFinanciersService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: FinancierDomainEntityBase) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, updates the entity, sets the id, deletes the createdAt property, and then
   * executes the aggregate root
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<FinancierDomainEntityBase | null> {
    const entity = this.updateEntity(command);
    entity.id = command.id;
    return this.executeInvoiceAggregateRoot(entity);
  }

  /**
   * This function takes a command and returns a validated financier.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A FinancierDomainEntityBase
   */
  private updateEntity(command: Command): FinancierDomainEntityBase {
    return new FinancierDomainEntityBase(command);
  }

  /**
   * This function is responsible for updating the financier's invoice aggregate root.
   * @param {FinancierDomainEntityBase} entity - FinancierDomainEntityBase - this is the aggregate root that we're
   * going to be updating.
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: FinancierDomainEntityBase,
  ): Observable<FinancierDomainEntityBase | null> {
    return this.financiersService.update(entity);
  }
}
