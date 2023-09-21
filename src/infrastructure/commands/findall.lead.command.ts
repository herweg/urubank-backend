import { ApiPropertyOptional } from '@nestjs/swagger';
import { IFindAllLeadCommand } from '../../domain/commands';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllLeadCommand implements IFindAllLeadCommand {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  /**
   * Min date for find.
   *
   * @type {number}
   * @memberof FindAllLeadCommand
   */
  minDate?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  /**
   * Max date for find.
   *
   * @type {number}
   * @memberof FindAllLeadCommand
   */
  maxDate?: number;
}
