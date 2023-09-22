import { ApiResponseProperty } from '@nestjs/swagger';
import { IFinancierEntity } from '../../domain/interfaces';

/**
 * Response for Financier FindById Command
 *
 * @export
 * @class FindByIdFinancierResponse
 */
export class FindByIdFinancierResponse {
  /**
   * State of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdFinancierResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findById.
   *
   * @type {IFinancierEntity}
   * @memberof FindByIdFinancierResponse
   */
  @ApiResponseProperty()
  data: IFinancierEntity;
}
