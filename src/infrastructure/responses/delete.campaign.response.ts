import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Use Delete Command
 *
 * @export
 * @class DeleteCampaignResponse
 */
export class DeleteCampaignResponse {
  /**
   * State of the delete.
   *
   * @type {boolean}
   * @memberof DeleteCampaignResponse
   */
  @ApiResponseProperty()
  success: boolean;
}
