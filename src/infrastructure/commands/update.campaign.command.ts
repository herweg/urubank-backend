import { ApiProperty } from '@nestjs/swagger';
import { IUpdateCampaignCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

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
  @IsOptional()
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
  financerId?: string;

  @ApiProperty()
  @IsOptional()
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
  brandName?: string;

  @ApiProperty()
  @IsOptional()
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
  phone?: string;
}
