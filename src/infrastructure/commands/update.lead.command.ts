import { IsBoolean, IsString, IsUUID } from 'class-validator';
import { IUpdateLeadCommand } from '../../domain/commands/update.lead.command.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class UpdateLeadCommand implements IUpdateLeadCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID of the lead.
   *
   * @type {string}
   * @memberof UpdateLeadCommand
   */
  id: string;

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
   * @memberof UpdateLeadCommand
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
   * @memberof UpdateLeadCommand
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
   * @memberof UpdateLeadCommand
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
   * @memberof UpdateLeadCommand
   */
  amount: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Final amount of the lead.
   *
   * @type {string}
   * @memberof UpdateLeadCommand
   */
  finalAmount: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Quotas of the lead.
   *
   * @type {string}
   * @memberof UpdateLeadCommand
   */
  quotas: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Quotas amount of the lead.
   *
   * @type {string}
   * @memberof CreateLeadCommand
   */
  quotasAmount: string;

  @ApiProperty()
  @IsBoolean()
  /**
   * Clearing of the lead.
   *
   * @type {boolean}
   * @memberof UpdateLeadCommand
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
   * @memberof UpdateLeadCommand
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
   * @memberof UpdateLeadCommand
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
   * @memberof UpdateLeadCommand
   */
  invoicePhoto: string;
}
