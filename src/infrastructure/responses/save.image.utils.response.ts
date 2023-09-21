import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Image Save Utilty Command
 *
 * @export
 * @class SaveImageUtilsResponse
 */
export class SaveImageUtilsResponse {
  /**
   * State of the image.
   *
   * @type {boolean}
   * @memberof SaveImageUtilsResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * File name of the image.
   *
   * @type {string}
   * @memberof SaveImageUtilsResponse
   */
  @ApiResponseProperty()
  data: string;
}
