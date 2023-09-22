import { Observable, map } from 'rxjs';
import { IUpdateManagerCommand } from '../../domain/commands';
import { IResponse, IManagersService } from '../../domain/interfaces';
import { ManagerDomainEntityBase } from '../../domain/entities';

export class UpdateManagerUseCase<
  Command extends IUpdateManagerCommand = IUpdateManagerCommand,
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
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, updates the entity, sets the id, deletes the createdAt property, and then
   * executes the aggregate root
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ManagerDomainEntityBase | null> {
    const entity = this.updateEntity(command);
    entity.id = command.id;
    delete entity.createdAt;
    return this.executeInvoiceAggregateRoot(entity);
  }

  /**
   * This function takes a command and returns a validated manager.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A ManagerDomainEntityBase
   */
  private updateEntity(command: Command): ManagerDomainEntityBase {
    return new ManagerDomainEntityBase(command);
  }

  /**
   * This function is responsible for updating the manager's invoice aggregate root.
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase - this is the aggregate root that we're
   * going to be updating.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: ManagerDomainEntityBase,
  ): Observable<ManagerDomainEntityBase | null> {
    return this.managersService.update(entity);
  }
}
