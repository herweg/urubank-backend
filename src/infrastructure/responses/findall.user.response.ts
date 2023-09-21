import { ApiResponseProperty } from '@nestjs/swagger';
import { IUserEntity } from '../../domain/interfaces';

/**
 * Response for User FindAll Command
 *
 * @export
 * @class FindAllUserResponse
 */
export class FindAllUserResponse {
  /**
   * State of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllUserResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAll.
   *
   * @type {IUserEntity[]}
   * @memberof FindAllUserResponse
   */
  @ApiResponseProperty()
  data: IUserEntity[];
}
