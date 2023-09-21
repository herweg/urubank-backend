import { Observable, map } from 'rxjs';
import { IDeleteFinancierCommand } from '../../domain/commands';
import { IResponse, IFinanciersService } from '../../domain/interfaces';

export class DeleteFinancierUseCase<
  Command extends IDeleteFinancierCommand = IDeleteFinancierCommand,
  Response extends IResponse<boolean> = IResponse<boolean>,
> {
  constructor(private readonly financiersService: IFinanciersService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of type Response.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map((value: boolean) => ({ success: true, data: value } as Response)),
    );
  }

  /**
   * If the command is a CreateInvoiceCommand, then execute the CreateInvoiceCommand on the
   * InvoiceAggregateRoot.
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<boolean | null>
   */
  private executeCommand(command: Command): Observable<boolean | null> {
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * It calls the `remove` function of the `FinanciersService` and returns the result
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<boolean | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<boolean | null> {
    return this.financiersService.remove(command.id);
  }
}
