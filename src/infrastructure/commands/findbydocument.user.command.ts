import { ApiProperty } from '@nestjs/swagger';
import { IFindByDocumentUserCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByDocumentUserCommand implements IFindByDocumentUserCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Document for find.
   *
   * @type {string}
   * @memberof FindByDocumentUserCommand
   */
  document: string;
}
