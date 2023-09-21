import { ApiProperty } from '@nestjs/swagger';
import { ICreateCampaignCommand } from '../../domain/commands';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class CreateCampaignCommand implements ICreateCampaignCommand {
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
   * @memberof CreateCampaignCommand
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
   * @memberof CreateCampaignCommand
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
   * @memberof CreateCampaignCommand
   */
  phone: string;
}
