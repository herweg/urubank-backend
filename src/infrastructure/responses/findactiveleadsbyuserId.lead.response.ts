import { ApiResponseProperty } from '@nestjs/swagger';
import { ILeadEntity } from '../../domain/interfaces';

/**
 * Response for Lead FindActiveLeadsByUserId Command
 *
 * @export
 * @class FindActiveLeadsByUserIdResponse
 */
export class FindActiveLeadsByUserIdResponse {
  /**
   * State of the find active leads.
   *
   * @type {boolean}
   * @memberof FindActiveLeadsByUserIdResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the find active leads.
   *
   * @type {ILeadEntity[]}
   * @memberof FindActiveLeadsByUserIdResponse
   */
  @ApiResponseProperty()
  data: ILeadEntity[];
}
