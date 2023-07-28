import { ApiProperty } from '@nestjs/swagger';
import { IUpdateUserCommand } from '../../domain/commands/update.user.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID, IsArray } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class UpdateUserCommand implements IUpdateUserCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Phone of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Document of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  document: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Email of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Country of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  country: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * State of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  state: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * City of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  city: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Address of the user.
   *
   * @type {string}
   * @memberof UpdateUserCommand
   */
  address: string;

  @ApiProperty()
  @IsArray()
  /**
   * Origin of the user.
   *
   * @type {string[]}
   * @memberof UpdateUserCommand
   */
  origin: string[];
}
