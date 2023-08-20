import { ApiProperty } from '@nestjs/swagger';
import { ISaveImageUtilsCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class SaveImageUtilsCommand implements ISaveImageUtilsCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Mime type for save.
   *
   * @type {string}
   * @memberof ISaveImageUtilsCommand
   */
  mimeType: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  /**
   * Data for save.
   *
   * @type {string}
   * @memberof ISaveImageUtilsCommand
   */
  data: string;
}
