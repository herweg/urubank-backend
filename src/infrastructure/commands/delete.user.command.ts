import { ApiProperty } from '@nestjs/swagger';
import { IDeleteUserCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class DeleteUserCommand implements IDeleteUserCommand {
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
   * @memberof DeleteUserCommand
   */
  id: string;
}
