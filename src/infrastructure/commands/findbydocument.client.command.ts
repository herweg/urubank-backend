import { ApiProperty } from '@nestjs/swagger';
import { IFindByDocumentClientCommand } from '../../domain/commands/findbydocument.client.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByDocumentClientCommand
  implements IFindByDocumentClientCommand
{
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Document for find.
   *
   * @type {string}
   * @memberof FindByDocumentClientCommand
   */
  document: string;
}
