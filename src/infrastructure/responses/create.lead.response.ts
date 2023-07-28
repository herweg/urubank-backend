import { ApiResponseProperty } from '@nestjs/swagger';
import { ILeadEntity } from '../../domain/interfaces';

/**
 * Response for Lead Create Command
 *
 * @export
 * @class CreateLeadResponse
 */
export class CreateLeadResponse {
  /**
   * State of the create.
   *
   * @type {boolean}
   * @memberof CreateLeadResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the create.
   *
   * @type {boolean}
   * @memberof CreateLeadResponse
   */
  @ApiResponseProperty()
  data: ILeadEntity;
}
