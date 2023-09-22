import { ApiResponseProperty } from '@nestjs/swagger';
import { IUserEntity } from '../../domain/interfaces';

/**
 * Response for User FindByDocument Command
 *
 * @export
 * @class FindByDocumentUserResponse
 */
export class FindByDocumentUserResponse {
  /**
   * State of the findByDocument.
   *
   * @type {boolean}
   * @memberof FindByDocumentUserResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findByDocument.
   *
   * @type {IUserEntity}
   * @memberof FindByDocumentUserResponse
   */
  @ApiResponseProperty()
  data: IUserEntity;
}
