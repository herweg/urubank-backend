import { Observable, map } from 'rxjs';
import { IFindAllManagerCommand } from '../../domain/commands';
import { IResponse, IManagersService } from '../../domain/interfaces';
import { ManagerDomainEntityBase } from '../../domain/entities';

export class FindAllManagerUseCase<
  Command extends IFindAllManagerCommand = IFindAllManagerCommand,
  Response extends IResponse<ManagerDomainEntityBase[]> = IResponse<
    ManagerDomainEntityBase[]
  >,
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
        (value: ManagerDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ManagerDomainEntityBase[] | null> {
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the manager exists, then return the manager, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<ManagerDomainEntityBase[] | null> {
    return this.managersService.findAll(command.minDate, command.maxDate);
  }
}
