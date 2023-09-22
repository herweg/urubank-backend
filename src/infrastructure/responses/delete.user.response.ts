import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Use Delete Command
 *
 * @export
 * @class DeleteUserResponse
 */
export class DeleteUserResponse {
  /**
   * State of the delete.
   *
   * @type {boolean}
   * @memberof DeleteUserResponse
   */
  @ApiResponseProperty()
  success: boolean;
}
