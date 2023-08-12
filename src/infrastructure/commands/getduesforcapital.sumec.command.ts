import { ApiProperty } from '@nestjs/swagger';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';
import { IGetDuesForCapitalSumecCommand } from '../../domain/commands';

export class GetDuesForCapitalSumecCommand
  implements IGetDuesForCapitalSumecCommand
{
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Capital of user to find in sumec api.
   *
   * @type {string}
   * @memberof GetDuesForCapitalSumecCommand
   */
  capital: string;
}
