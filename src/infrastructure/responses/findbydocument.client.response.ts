import { ApiResponseProperty } from '@nestjs/swagger';
import { IClientEntity } from '../../domain/interfaces';

/**
 * Response for Client FindByDocument Command
 *
 * @export
 * @class FindByDocumentClientResponse
 */
export class FindByDocumentClientResponse {
  /**
   * State of the findByDocument.
   *
   * @type {boolean}
   * @memberof FindByDocumentClientResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findByDocument.
   *
   * @type {boolean}
   * @memberof FindByDocumentClientResponse
   */
  @ApiResponseProperty()
  data: IClientEntity;
}
