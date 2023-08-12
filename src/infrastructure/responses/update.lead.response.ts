import { ApiResponseProperty } from '@nestjs/swagger';
import { ILeadEntity } from '../../domain/interfaces';

/**
 * Response for Lead Update Command
 *
 * @export
 * @class UpdateLeadResponse
 */
export class UpdateLeadResponse {
  /**
   * State of the update.
   *
   * @type {boolean}
   * @memberof UpdateLeadResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the update.
   *
   * @type {ILeadEntity}
   * @memberof UpdateLeadResponse
   */
  @ApiResponseProperty()
  data: ILeadEntity;
}
