import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IGetPreApprovedSumecCommand } from '../../domain/commands';
import { IResponse, ISumecService } from '../../domain/interfaces';
import { SumecDomainEntityBase } from '../../domain/entities';

export class GetPreApprovedSumecUseCase<
  Command extends IGetPreApprovedSumecCommand = IGetPreApprovedSumecCommand,
  Response extends IResponse<SumecDomainEntityBase> = IResponse<SumecDomainEntityBase>,
> {
  constructor(private readonly SumecService: ISumecService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: SumecDomainEntityBase) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<SumecDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<SumecDomainEntityBase | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<SumecDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<SumecDomainEntityBase | null> {
    if (!command.age || command.age.trim() === '') {
      throw new BadRequestException('');
    }
    if (!command.ci || command.ci.trim() === '') {
      throw new BadRequestException('');
    }
    if (!command.salary || command.salary.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the Sumec exists, then return the Sumec, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<SumecDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<SumecDomainEntityBase | null> {
    return this.SumecService.getPreApproved(
      command.ci,
      command.age,
      command.salary,
    );
  }
}
