import { ApiResponseProperty } from '@nestjs/swagger';
import { IManagerEntity } from '../../domain/interfaces';

/**
 * Response for Manager findByEmail Command
 *
 * @export
 * @class FindByEmailManagerResponse
 */
export class FindByEmailManagerResponse {
  /**
   * State of the findByEmail.
   *
   * @type {boolean}
   * @memberof FindByEmailManagerResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findByEmail.
   *
   * @type {IManagerEntity}
   * @memberof FindByEmailManagerResponse
   */
  @ApiResponseProperty()
  data: IManagerEntity;
}
