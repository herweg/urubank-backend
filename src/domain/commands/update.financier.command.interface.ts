export interface IUpdateFinancierCommand {
  /**
   * UUID of the financier.
   *
   * @type {string}
   * @memberof IUpdateFinancierCommand
   */
  id: string;
  /**
   * Brand name of the financier.
   *
   * @type {string}
   * @memberof IUpdateFinancierCommand
   */
  brandName?: string;
  /**
   * Phones of the financier.
   *
   * @type {string[]}
   * @memberof IUpdateFinancierCommand
   */
  phones?: string[];
  /**
   * Emails of the financier.
   *
   * @type {string[]}
   * @memberof IUpdateFinancierCommand
   */
  emails?: string[];
  /**
   * Country of the financier.
   *
   * @type {string}
   * @memberof IUpdateFinancierCommand
   */
  country?: string;
  /**
   * State of the financier.
   *
   * @type {string}
   * @memberof IUpdateFinancierCommand
   */
  state?: string;
  /**
   * City of the financier.
   *
   * @type {string}
   * @memberof IUpdateFinancierCommand
   */
  city?: string;
  /**
   * Court address of the financier.
   *
   * @type {string}
   * @memberof IUpdateFinancierCommand
   */
  courtAddress?: string;
}
