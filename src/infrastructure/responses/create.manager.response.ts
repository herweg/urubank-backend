import { ApiResponseProperty } from '@nestjs/swagger';
import { IManagerEntity } from '../../domain/interfaces';

/**
 * Response for Manager Create Command
 *
 * @export
 * @class CreateManagerResponse
 */
export class CreateManagerResponse {
  /**
   * State of the create.
   *
   * @type {boolean}
   * @memberof CreateManagerResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the create.
   *
   * @type {IManagerEntity}
   * @memberof CreateManagerResponse
   */
  @ApiResponseProperty()
  data: IManagerEntity;
}
