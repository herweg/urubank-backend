import { Observable, map } from 'rxjs';
import { ICreateManagerCommand } from '../../domain/commands';
import { IResponse, IManagersService } from '../../domain/interfaces';
import { ManagerDomainEntityBase } from '../../domain/entities';

export class CreateManagerUseCase<
  Command extends ICreateManagerCommand = ICreateManagerCommand,
  Response extends IResponse<ManagerDomainEntityBase> = IResponse<ManagerDomainEntityBase>,
> {
  constructor(private readonly managersService: IManagersService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: ManagerDomainEntityBase) =>
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
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ManagerDomainEntityBase | null> {
    return this.executeInvoiceAggregateRoot(this.createEntity(command));
  }

  /**
   * Create a new manager entity from the command, validate it, and return it.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A ManagerDomainEntityBase
   */
  private createEntity(command: Command): ManagerDomainEntityBase {
    return new ManagerDomainEntityBase(command);
  }

  /**
   * > This function is responsible for creating a new manager
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase - this is the entity that is being
   * created.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: ManagerDomainEntityBase,
  ): Observable<ManagerDomainEntityBase | null> {
    return this.managersService.create(entity);
  }
}
