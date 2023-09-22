import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Use Delete Command
 *
 * @export
 * @class DeleteManagerResponse
 */
export class DeleteManagerResponse {
  /**
   * State of the delete.
   *
   * @type {boolean}
   * @memberof DeleteManagerResponse
   */
  @ApiResponseProperty()
  success: boolean;
}
