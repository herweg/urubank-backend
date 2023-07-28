import { ApiProperty } from '@nestjs/swagger';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';
import { IUpdateCampaignCommand } from '../../domain/commands/update.campaign.command.interface';

export class UpdateCampaignCommand implements IUpdateCampaignCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID of the campaign.
   *
   * @type {string}
   * @memberof UpdateCampaignCommand
   */
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * Financer UUID of the campaign.
   *
   * @type {string}
   * @memberof UpdateCampaignCommand
   */
  financerId: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Brand name of the campaign.
   *
   * @type {string}
   * @memberof UpdateCampaignCommand
   */
  brandName: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Phone of the campaign.
   *
   * @type {string}
   * @memberof UpdateCampaignCommand
   */
  phone: string;
}
