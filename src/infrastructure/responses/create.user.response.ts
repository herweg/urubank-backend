import { ApiResponseProperty } from '@nestjs/swagger';
import { IUserEntity } from '../../domain/interfaces';

/**
 * Response for User Create Command
 *
 * @export
 * @class CreateUserResponse
 */
export class CreateUserResponse {
  /**
   * State of the create.
   *
   * @type {boolean}
   * @memberof CreateUserResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the create.
   *
   * @type {boolean}
   * @memberof CreateUserResponse
   */
  @ApiResponseProperty()
  data: IUserEntity;
}
