import { ApiProperty } from '@nestjs/swagger';
import { ICreateManagerCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class CreateManagerCommand implements ICreateManagerCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Full name of the manager.
   *
   * @type {string}
   * @memberof CreateManagerCommand
   */
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Email of the manager.
   *
   * @type {string}
   * @memberof CreateManagerCommand
   */
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * Financier ID of the manager.
   *
   * @type {string}
   * @memberof CreateManagerCommand
   */
  financierId: string;
}
