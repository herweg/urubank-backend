import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { ISaveImageUtilsCommand } from '../../domain/commands';
import { IResponse, IUtilsService } from '../../domain/interfaces';

export class SaveImageUtilsUseCase<
  Command extends ISaveImageUtilsCommand = ISaveImageUtilsCommand,
  Response extends IResponse<string> = IResponse<string>,
> {
  constructor(private readonly UtilsService: IUtilsService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map((value: string) => ({ success: true, data: value } as Response)),
    );
  }

  /**
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<string | null>
   */
  private executeCommand(command: Command): Observable<string | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<string | null>
   */
  private validateCommand(command: Command): Observable<string | null> {
    if (!command.mimeType || command.mimeType.trim() === '') {
      throw new BadRequestException('');
    }
    if (!command.data || command.data.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the Utils exists, then return the Utils, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<string | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<string | null> {
    return this.UtilsService.saveImage(command.mimeType, command.data);
  }
}
