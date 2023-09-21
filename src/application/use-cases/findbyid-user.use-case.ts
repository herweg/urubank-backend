import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IFindByIdUserCommand } from '../../domain/commands';
import { IResponse, IUsersService } from '../../domain/interfaces';
import { UserDomainEntityBase } from '../../domain/entities';

export class FindByIdUserUseCase<
  Command extends IFindByIdUserCommand = IFindByIdUserCommand,
  Response extends IResponse<UserDomainEntityBase> = IResponse<UserDomainEntityBase>,
> {
  constructor(private readonly usersService: IUsersService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: UserDomainEntityBase) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<UserDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<UserDomainEntityBase | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<UserDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<UserDomainEntityBase | null> {
    if (!command.id || command.id.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the user exists, then return the user, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<UserDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<UserDomainEntityBase | null> {
    return this.usersService.findById(command.id);
  }
}
