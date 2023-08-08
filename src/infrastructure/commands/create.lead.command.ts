import { IsBoolean, IsString, IsUUID } from 'class-validator';
import { ICreateLeadCommand } from '../../domain/commands/create.lead.command.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class CreateLeadCommand implements ICreateLeadCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * Campaign UUID of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  campaignId: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * User UUID of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Status of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  status: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Amount of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  amount: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Quotas of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  quotas: string;

  @ApiProperty()
  @IsBoolean()
  /**
   * Clearing of the lead.
   *
   * @type {boolean}
   * @memberof CreateLeadCommand
   */
  clearing: boolean;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Document photo of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  documentPhoto: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Front photo of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  frontPhoto: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Invoice photo of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  invoicePhoto: string;
}
