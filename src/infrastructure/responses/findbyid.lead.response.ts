import { ApiResponseProperty } from '@nestjs/swagger';
import { ILeadEntity } from '../../domain/interfaces';

/**
 * Response for Lead FindById Command
 *
 * @export
 * @class FindByIdLeadResponse
 */
export class FindByIdLeadResponse {
  /**
   * State of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdLeadResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdLeadResponse
   */
  @ApiResponseProperty()
  data: ILeadEntity;
}
