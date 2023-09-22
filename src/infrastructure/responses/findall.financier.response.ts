import { ApiResponseProperty } from '@nestjs/swagger';
import { IFinancierEntity } from '../../domain/interfaces';

/**
 * Response for Financier FindAll Command
 *
 * @export
 * @class FindAllFinancierResponse
 */
export class FindAllFinancierResponse {
  /**
   * State of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllFinancierResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAll.
   *
   * @type {IFinancierEntity[]}
   * @memberof FindAllFinancierResponse
   */
  @ApiResponseProperty()
  data: IFinancierEntity[];
}
