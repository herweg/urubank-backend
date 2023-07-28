import { ApiProperty } from '@nestjs/swagger';
import { IFindByIdFinancierCommand } from '../../domain/commands/findbyid.financier.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByIdFinancierCommand implements IFindByIdFinancierCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID for find.
   *
   * @type {string}
   * @memberof FindByIdFinancierCommand
   */
  id: string;
}
