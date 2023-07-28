import { Observable, map } from 'rxjs';
import { IUpdateUserCommand } from '../../domain/commands';
import { IResponse, IUsersService } from '../../domain/interfaces';
import { UserDomainEntityBase } from '../../domain/entities';

export class UpdateUserUseCase<
  Command extends IUpdateUserCommand = IUpdateUserCommand,
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
   * It takes a command, updates the entity, sets the id, deletes the createdAt property, and then
   * executes the aggregate root
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<UserDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<UserDomainEntityBase | null> {
    const entity = this.updateEntity(command);
    entity.id = command.id;
    delete entity.createdAt;
    return this.executeInvoiceAggregateRoot(entity);
  }

  /**
   * This function takes a command and returns a validated user.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A UserDomainEntityBase
   */
  private updateEntity(command: Command): UserDomainEntityBase {
    return new UserDomainEntityBase(command);
  }

  /**
   * This function is responsible for updating the user's invoice aggregate root.
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase - this is the aggregate root that we're
   * going to be updating.
   * @returns Observable<UserDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: UserDomainEntityBase,
  ): Observable<UserDomainEntityBase | null> {
    return this.usersService.update(entity);
  }
}
