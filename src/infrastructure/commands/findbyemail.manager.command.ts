import { ApiProperty } from '@nestjs/swagger';
import { IFindByEmailManagerCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByEmailManagerCommand implements IFindByEmailManagerCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Email for find.
   *
   * @type {string}
   * @memberof FindByEmailManagerCommand
   */
  email: string;
}
