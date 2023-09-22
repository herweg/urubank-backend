import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Use Delete Command
 *
 * @export
 * @class DeleteFinancierResponse
 */
export class DeleteFinancierResponse {
  /**
   * State of the delete.
   *
   * @type {boolean}
   * @memberof DeleteFinancierResponse
   */
  @ApiResponseProperty()
  success: boolean;
}
