import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IFindAllByFinancierIdLeadCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindAllByFinancierIdLeadCommand
  implements IFindAllByFinancierIdLeadCommand
{
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * FinancierId for find.
   *
   * @type {string}
   * @memberof FindAllByFinancierIdLeadCommand
   */
  financierId: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  /**
   * Min date for find.
   *
   * @type {number}
   * @memberof FindAllByFinancierIdLeadCommand
   */
  minDate?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  /**
   * Max date for find.
   *
   * @type {number}
   * @memberof FindAllByFinancierIdLeadCommand
   */
  maxDate?: number;
}
