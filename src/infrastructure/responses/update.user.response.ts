import { ApiResponseProperty } from '@nestjs/swagger';
import { IUserEntity } from '../../domain/interfaces';

/**
 * Response for User Update Command
 *
 * @export
 * @class UpdateUserResponse
 */
export class UpdateUserResponse {
  /**
   * State of the update.
   *
   * @type {boolean}
   * @memberof UpdateUserResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the update.
   *
   * @type {boolean}
   * @memberof UpdateUserResponse
   */
  @ApiResponseProperty()
  data: IUserEntity;
}
