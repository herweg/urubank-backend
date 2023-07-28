import { ApiProperty } from '@nestjs/swagger';
import { IFindByIdUserCommand } from '../../domain/commands/findbyid.user.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByIdUserCommand implements IFindByIdUserCommand {
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
   * @memberof FindByIdUserCommand
   */
  id: string;
}
