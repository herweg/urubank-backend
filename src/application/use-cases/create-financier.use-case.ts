import { Observable, map } from 'rxjs';
import { ICreateFinancierCommand } from '../../domain/commands';
import { IResponse, IFinanciersService } from '../../domain/interfaces';
import { FinancierDomainEntityBase } from '../../domain/entities';

export class CreateFinancierUseCase<
  Command extends ICreateFinancierCommand = ICreateFinancierCommand,
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
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<FinancierDomainEntityBase | null> {
    return this.executeInvoiceAggregateRoot(this.createEntity(command));
  }

  /**
   * Create a new financier entity from the command, validate it, and return it.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A FinancierDomainEntityBase
   */
  private createEntity(command: Command): FinancierDomainEntityBase {
    return new FinancierDomainEntityBase(command);
  }

  /**
   * > This function is responsible for creating a new financier
   * @param {FinancierDomainEntityBase} entity - FinancierDomainEntityBase - this is the entity that is being
   * created.
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: FinancierDomainEntityBase,
  ): Observable<FinancierDomainEntityBase | null> {
    return this.financiersService.create(entity);
  }
}
