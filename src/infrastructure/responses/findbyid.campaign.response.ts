import { ApiResponseProperty } from '@nestjs/swagger';
import { ICampaignEntity } from '../../domain/interfaces';

/**
 * Response for Campaign FindById Command
 *
 * @export
 * @class FindByIdCampaignResponse
 */
export class FindByIdCampaignResponse {
  /**
   * State of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdCampaignResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdCampaignResponse
   */
  @ApiResponseProperty()
  data: ICampaignEntity;
}
