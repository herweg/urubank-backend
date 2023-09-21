import { ApiResponseProperty } from '@nestjs/swagger';
import { ISumecEntity } from '../../domain/interfaces';

/**
 * Response for Sumec GetPreApproved Command
 *
 * @export
 * @class GetPreApprovedSumecResponse
 */
export class GetPreApprovedSumecResponse {
  /**
   * State of the getPreApproved.
   *
   * @type {boolean}
   * @memberof GetPreApprovedSumecResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the getPreApproved.
   *
   * @type {ISumecEntity}
   * @memberof GetPreApprovedSumecResponse
   */
  @ApiResponseProperty()
  data: ISumecEntity;
}
