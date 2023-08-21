/**
 * Financier entity interface
 *
 * @export
 * @interface IFinancierEntity
 */
export interface IFinancierEntity {
  /**
   * UUID of the financier.
   *
   * @type {string}
   * @memberof IFinancierEntity
   */
  id?: string;
  /**
   * Brand name of the financier.
   *
   * @type {string}
   * @memberof IFinancierEntity
   */
  brandName?: string;
  /**
   * Phones of the financier.
   *
   * @type {string[]}
   * @memberof IFinancierEntity
   */
  phones?: string[];
  /**
   * Emails of the financier.
   *
   * @type {string[]}
   * @memberof IFinancierEntity
   */
  emails?: string[];
  /**
   * Country of the financier.
   *
   * @type {string}
   * @memberof IFinancierEntity
   */
  country?: string;
  /**
   * State of the financier.
   *
   * @type {string}
   * @memberof IFinancierEntity
   */
  state?: string;
  /**
   * City of the financier.
   *
   * @type {string}
   * @memberof IFinancierEntity
   */
  city?: string;
  /**
   * Court address of the financier.
   *
   * @type {string}
   * @memberof IFinancierEntity
   */
  courtAddress?: string;
}
