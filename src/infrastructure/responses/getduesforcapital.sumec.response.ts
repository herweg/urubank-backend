import { ApiResponseProperty } from '@nestjs/swagger';
import { ISumecEntity } from '../../domain/interfaces';

/**
 * Response for Sumec GetDuesForCapital Command
 *
 * @export
 * @class GetDuesForCapitalSumecResponse
 */
export class GetDuesForCapitalSumecResponse {
  /**
   * State of the getDuesForCapital.
   *
   * @type {boolean}
   * @memberof GetDuesForCapitalSumecResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the getDuesForCapital.
   *
   * @type {ISumecEntity}
   * @memberof GetDuesForCapitalSumecResponse
   */
  @ApiResponseProperty()
  data: ISumecEntity;
}
