import { ApiResponseProperty } from '@nestjs/swagger';
import { IUserEntity } from '../../domain/interfaces';

/**
 * Response for User FindById Command
 *
 * @export
 * @class FindByIdUserResponse
 */
export class FindByIdUserResponse {
  /**
   * State of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdUserResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findById.
   *
   * @type {IUserEntity}
   * @memberof FindByIdUserResponse
   */
  @ApiResponseProperty()
  data: IUserEntity;
}
