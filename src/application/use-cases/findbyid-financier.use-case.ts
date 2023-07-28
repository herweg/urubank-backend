import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IFindByIdFinancierCommand } from '../../domain/commands';
import { IResponse, IFinanciersService } from '../../domain/interfaces';
import { FinancierDomainEntityBase } from '../../domain/entities';

export class FindByIdFinancierUseCase<
  Command extends IFindByIdFinancierCommand = IFindByIdFinancierCommand,
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
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<FinancierDomainEntityBase | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<FinancierDomainEntityBase | null> {
    if (!command.id || command.id.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the financier exists, then return the financier, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<FinancierDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<FinancierDomainEntityBase | null> {
    return this.financiersService.findById(command.id);
  }
}
