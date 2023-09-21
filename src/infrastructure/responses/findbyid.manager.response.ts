import { ApiResponseProperty } from '@nestjs/swagger';
import { IManagerEntity } from '../../domain/interfaces';

/**
 * Response for Manager FindById Command
 *
 * @export
 * @class FindByIdManagerResponse
 */
export class FindByIdManagerResponse {
  /**
   * State of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdManagerResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findById.
   *
   * @type {IManagerEntity}
   * @memberof FindByIdManagerResponse
   */
  @ApiResponseProperty()
  data: IManagerEntity;
}
