import { ApiResponseProperty } from '@nestjs/swagger';
import { IManagerEntity } from '../../domain/interfaces';

/**
 * Response for Manager Update Command
 *
 * @export
 * @class UpdateManagerResponse
 */
export class UpdateManagerResponse {
  /**
   * State of the update.
   *
   * @type {boolean}
   * @memberof UpdateManagerResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the update.
   *
   * @type {IManagerEntity}
   * @memberof UpdateManagerResponse
   */
  @ApiResponseProperty()
  data: IManagerEntity;
}
