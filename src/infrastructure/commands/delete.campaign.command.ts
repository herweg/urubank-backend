import { ApiProperty } from '@nestjs/swagger';
import { IDeleteCampaignCommand } from '../../domain/commands/delete.campaign.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class DeleteCampaignCommand implements IDeleteCampaignCommand {
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
   * @memberof DeleteCampaignCommand
   */
  id: string;
}
