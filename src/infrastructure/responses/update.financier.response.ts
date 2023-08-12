import { ApiResponseProperty } from '@nestjs/swagger';
import { IFinancierEntity } from '../../domain/interfaces';

/**
 * Response for Financier Update Command
 *
 * @export
 * @class UpdateFinancierResponse
 */
export class UpdateFinancierResponse {
  /**
   * State of the update.
   *
   * @type {boolean}
   * @memberof UpdateFinancierResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the update.
   *
   * @type {IFinancierEntity}
   * @memberof UpdateFinancierResponse
   */
  @ApiResponseProperty()
  data: IFinancierEntity;
}
