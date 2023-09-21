import { ApiProperty } from '@nestjs/swagger';
import { IUpdateManagerCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class UpdateManagerCommand implements IUpdateManagerCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID of the manager.
   *
   * @type {string}
   * @memberof UpdateManagerCommand
   */
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Full name of the manager.
   *
   * @type {string}
   * @memberof UpdateManagerCommand
   */
  fullName?: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Email of the manager.
   *
   * @type {string}
   * @memberof UpdateManagerCommand
   */
  email?: string;

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
   * @memberof UpdateManagerCommand
   */
  financierId?: string;
}
