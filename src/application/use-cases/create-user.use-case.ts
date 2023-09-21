import { Observable, map } from 'rxjs';
import { ICreateUserCommand } from '../../domain/commands';
import { IResponse, IUsersService } from '../../domain/interfaces';
import { UserDomainEntityBase } from '../../domain/entities';

export class CreateUserUseCase<
  Command extends ICreateUserCommand = ICreateUserCommand,
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
   * @returns Observable<UserDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<UserDomainEntityBase | null> {
    return this.executeInvoiceAggregateRoot(this.createEntity(command));
  }

  /**
   * Create a new user entity from the command, validate it, and return it.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A UserDomainEntityBase
   */
  private createEntity(command: Command): UserDomainEntityBase {
    return new UserDomainEntityBase(command);
  }

  /**
   * > This function is responsible for creating a new user
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase - this is the entity that is being
   * created.
   * @returns Observable<UserDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: UserDomainEntityBase,
  ): Observable<UserDomainEntityBase | null> {
    return this.usersService.create(entity);
  }
}
