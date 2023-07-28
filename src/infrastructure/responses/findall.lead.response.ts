import { ApiResponseProperty } from '@nestjs/swagger';
import { ILeadEntity } from '../../domain/interfaces';

/**
 * Response for Lead FindAll Command
 *
 * @export
 * @class FindAllLeadResponse
 */
export class FindAllLeadResponse {
  /**
   * State of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllLeadResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllLeadResponse
   */
  @ApiResponseProperty()
  data: ILeadEntity[];
}
