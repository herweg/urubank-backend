import { ApiProperty } from '@nestjs/swagger';
import { IFindAllByFinancierIdLeadCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
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
}
