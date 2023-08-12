import { ApiResponseProperty } from '@nestjs/swagger';
import { IFinancierEntity } from '../../domain/interfaces';

/**
 * Response for Financier Create Command
 *
 * @export
 * @class CreateFinancierResponse
 */
export class CreateFinancierResponse {
  /**
   * State of the create.
   *
   * @type {boolean}
   * @memberof CreateFinancierResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the create.
   *
   * @type {IFinancierEntity}
   * @memberof CreateFinancierResponse
   */
  @ApiResponseProperty()
  data: IFinancierEntity;
}
