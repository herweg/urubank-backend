import { ApiProperty } from '@nestjs/swagger';
import { IFindByIdCampaignCommand } from '../../domain/commands/findbyid.campaign.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByIdCampaignCommand implements IFindByIdCampaignCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID for find.
   *
   * @type {string}
   * @memberof FindByIdCampaignCommand
   */
  id: string;
}
