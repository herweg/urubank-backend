import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Use Delete Command
 *
 * @export
 * @class DeleteLeadResponse
 */
export class DeleteLeadResponse {
  /**
   * State of the delete.
   *
   * @type {boolean}
   * @memberof DeleteLeadResponse
   */
  @ApiResponseProperty()
  success: boolean;
}
