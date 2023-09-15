import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IFindByIdManagerCommand } from '../../domain/commands';
import { IResponse, IManagersService } from '../../domain/interfaces';
import { ManagerDomainEntityBase } from '../../domain/entities';

export class FindByIdManagerUseCase<
  Command extends IFindByIdManagerCommand = IFindByIdManagerCommand,
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
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ManagerDomainEntityBase | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<ManagerDomainEntityBase | null> {
    if (!command.id || command.id.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the manager exists, then return the manager, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<ManagerDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<ManagerDomainEntityBase | null> {
    return this.managersService.findById(command.id);
  }
}
