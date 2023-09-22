import { ApiPropertyOptional } from '@nestjs/swagger';
import { IFindAllManagerCommand } from '../../domain/commands';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllManagerCommand implements IFindAllManagerCommand {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  /**
   * Min date for find.
   *
   * @type {number}
   * @memberof FindAllManagerCommand
   */
  minDate?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  /**
   * Max date for find.
   *
   * @type {number}
   * @memberof FindAllManagerCommand
   */
  maxDate?: number;
}
