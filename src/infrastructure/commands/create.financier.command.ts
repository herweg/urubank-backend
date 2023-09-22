import { ApiProperty } from '@nestjs/swagger';
import { ICreateFinancierCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsArray } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class CreateFinancierCommand implements ICreateFinancierCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Brand name of the financier.
   *
   * @type {string}
   * @memberof CreateFinancierCommand
   */
  brandName: string;

  @ApiProperty()
  @IsArray()
  /**
   * Phones of the financier.
   *
   * @type {string[]}
   * @memberof CreateFinancierCommand
   */
  phones: string[];

  @ApiProperty()
  @IsArray()
  /**
   * Emails of the financier.
   *
   * @type {string[]}
   * @memberof CreateFinancierCommand
   */
  emails: string[];

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Country of the financier.
   *
   * @type {string}
   * @memberof CreateFinancierCommand
   */
  country: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * State of the financier.
   *
   * @type {string}
   * @memberof CreateFinancierCommand
   */
  state: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * City of the financier.
   *
   * @type {string}
   * @memberof CreateFinancierCommand
   */
  city: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Court address of the financier.
   *
   * @type {string}
   * @memberof CreateFinancierCommand
   */
  courtAddress: string;
}
