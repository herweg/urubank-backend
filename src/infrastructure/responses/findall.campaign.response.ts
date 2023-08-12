import { ApiResponseProperty } from '@nestjs/swagger';
import { ICampaignEntity } from '../../domain/interfaces';

/**
 * Response for Campaign FindAll Command
 *
 * @export
 * @class FindAllCampaignResponse
 */
export class FindAllCampaignResponse {
  /**
   * State of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllCampaignResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAll.
   *
   * @type {ICampaignEntity[]}
   * @memberof FindAllCampaignResponse
   */
  @ApiResponseProperty()
  data: ICampaignEntity[];
}
