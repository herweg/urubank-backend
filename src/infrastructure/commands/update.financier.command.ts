import { ApiProperty } from '@nestjs/swagger';
import { IUpdateFinancierCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsArray, IsUUID, IsOptional } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class UpdateFinancierCommand implements IUpdateFinancierCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID of the financier.
   *
   * @type {string}
   * @memberof UpdateFinancierCommand
   */
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Brand name of the financier.
   *
   * @type {string}
   * @memberof UpdateFinancierCommand
   */
  brandName?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  /**
   * Phones of the financier.
   *
   * @type {string[]}
   * @memberof UpdateFinancierCommand
   */
  phones?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  /**
   * Emails of the financier.
   *
   * @type {string[]}
   * @memberof UpdateFinancierCommand
   */
  emails?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Country of the financier.
   *
   * @type {string}
   * @memberof UpdateFinancierCommand
   */
  country?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * State of the financier.
   *
   * @type {string}
   * @memberof UpdateFinancierCommand
   */
  state?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * City of the financier.
   *
   * @type {string}
   * @memberof UpdateFinancierCommand
   */
  city?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Court address of the financier.
   *
   * @type {string}
   * @memberof UpdateFinancierCommand
   */
  courtAddress?: string;
}
