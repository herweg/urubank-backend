import { ApiProperty } from '@nestjs/swagger';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';
import { IGetPreApprovedSumecCommand } from '../../domain/commands';

export class GetPreApprovedSumecCommand implements IGetPreApprovedSumecCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * CI of user to find in sumec api.
   *
   * @type {string}
   * @memberof GetPreApprovedSumecCommand
   */
  ci: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Age of user to find in sumec api.
   *
   * @type {string}
   * @memberof GetPreApprovedSumecCommand
   */
  age: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Salary of user to find in sumec api.
   *
   * @type {string}
   * @memberof GetPreApprovedSumecCommand
   */
  salary: string;
}
