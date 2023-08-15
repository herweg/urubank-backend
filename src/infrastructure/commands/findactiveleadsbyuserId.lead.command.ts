import { ApiProperty } from '@nestjs/swagger';
import { IFindActiveLeadsByUserIdLeadCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindActiveLeadsByUserIdLeadCommand
  implements IFindActiveLeadsByUserIdLeadCommand
{
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UserId for find.
   *
   * @type {string}
   * @memberof FindActiveLeadsByUserIdLeadCommand
   */
  userId: string;
}
