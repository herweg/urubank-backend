import { ApiResponseProperty } from '@nestjs/swagger';
import { IManagerEntity } from '../../domain/interfaces';

/**
 * Response for Manager FindAll Command
 *
 * @export
 * @class FindAllManagerResponse
 */
export class FindAllManagerResponse {
  /**
   * State of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllManagerResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAll.
   *
   * @type {IManagerEntity[]}
   * @memberof FindAllManagerResponse
   */
  @ApiResponseProperty()
  data: IManagerEntity[];
}
