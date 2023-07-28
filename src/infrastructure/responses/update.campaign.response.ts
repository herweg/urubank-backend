import { ApiResponseProperty } from '@nestjs/swagger';
import { ICampaignEntity } from '../../domain/interfaces';

/**
 * Response for Campaign Update Command
 *
 * @export
 * @class UpdateCampaignResponse
 */
export class UpdateCampaignResponse {
  /**
   * State of the update.
   *
   * @type {boolean}
   * @memberof UpdateCampaignResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the update.
   *
   * @type {boolean}
   * @memberof UpdateCampaignResponse
   */
  @ApiResponseProperty()
  data: ICampaignEntity;
}
