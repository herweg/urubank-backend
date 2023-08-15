import { ApiResponseProperty } from '@nestjs/swagger';
import { ILeadEntity } from '../../domain/interfaces';

/**
 * Response for Lead FindAllByFinancierId Command
 *
 * @export
 * @class FindAllByFinancierIdLeadResponse
 */
export class FindAllByFinancierIdLeadResponse {
  /**
   * State of the findAllByFinancierId.
   *
   * @type {boolean}
   * @memberof FindAllByFinancierIdLeadResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAllByFinancierId.
   *
   * @type {ILeadEntity}
   * @memberof FindAllByFinancierIdLeadResponse
   */
  @ApiResponseProperty()
  data: ILeadEntity;
}
