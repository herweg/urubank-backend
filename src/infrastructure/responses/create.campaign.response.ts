import { ApiResponseProperty } from '@nestjs/swagger';
import { ICampaignEntity } from '../../domain/interfaces';

/**
 * Response for Campaign Create Command
 *
 * @export
 * @class CreateCampaignResponse
 */
export class CreateCampaignResponse {
  /**
   * State of the create.
   *
   * @type {boolean}
   * @memberof CreateCampaignResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the create.
   *
   * @type {boolean}
   * @memberof CreateCampaignResponse
   */
  @ApiResponseProperty()
  data: ICampaignEntity;
}
