import { ApiProperty } from '@nestjs/swagger';
import { ICreateUserCommand } from '../../domain/commands/create.user.command.interface';
import { IsArray, IsString } from 'class-validator';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class CreateUserCommand implements ICreateUserCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof CreateUserCommand
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
   * @memberof CreateUserCommand
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
   * @memberof CreateUserCommand
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
   * @memberof CreateUserCommand
   */
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Age of the user.
   *
   * @type {string}
   * @memberof CreateUserCommand
   */
  age: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Salary of the user.
   *
   * @type {string}
   * @memberof CreateUserCommand
   */
  salary: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Country of the user.
   *
   * @type {string}
   * @memberof CreateUserCommand
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
   * @memberof CreateUserCommand
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
   * @memberof CreateUserCommand
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
   * @memberof CreateUserCommand
   */
  address: string;

  @ApiProperty()
  @IsArray()
  /**
   * Origin of the user.
   *
   * @type {string[]}
   * @memberof CreateUserCommand
   */
  origin: string[];
}
