import { Observable, map } from 'rxjs';
import { IResponse, IUsersService } from '../../domain/interfaces';
import { UserDomainEntityBase } from '../../domain/entities';

export class FindAllUserUseCase<
  Response extends IResponse<UserDomainEntityBase[]> = IResponse<
    UserDomainEntityBase[]
  >,
> {
  constructor(private readonly usersService: IUsersService) {}

  /**
   * > The `execute` function returns an observable of type `Response` that is the result of the
   * `executeCommand` function
   * @returns An Observable of type Response.
   */
  execute(): Observable<Response> {
    return this.executeCommand().pipe(
      map(
        (value: UserDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * > The function executes the aggregate root's command and returns the aggregate root's domain
   * entities
   * @returns Observable<UserDomainEntityBase[] | null>
   */
  private executeCommand(): Observable<UserDomainEntityBase[] | null> {
    return this.executeInvoiceAggregateRoot();
  }

  /**
   * > It returns an observable of an array of user domain entities or null
   * @returns An Observable of an array of UserDomainEntityBase objects or null.
   */
  private executeInvoiceAggregateRoot(): Observable<
    UserDomainEntityBase[] | null
  > {
    return this.usersService.findAll();
  }
}
