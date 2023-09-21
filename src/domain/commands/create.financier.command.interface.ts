export interface ICreateFinancierCommand {
  /**
   * Brand name of the financier.
   *
   * @type {string}
   * @memberof ICreateFinancierCommand
   */
  brandName: string;
  /**
   * Phones of the financier.
   *
   * @type {string[]}
   * @memberof ICreateFinancierCommand
   */
  phones: string[];
  /**
   * Emails of the financier.
   *
   * @type {string[]}
   * @memberof ICreateFinancierCommand
   */
  emails: string[];
  /**
   * Country of the financier.
   *
   * @type {string}
   * @memberof ICreateFinancierCommand
   */
  country: string;
  /**
   * State of the financier.
   *
   * @type {string}
   * @memberof ICreateFinancierCommand
   */
  state: string;
  /**
   * City of the financier.
   *
   * @type {string}
   * @memberof ICreateFinancierCommand
   */
  city: string;
  /**
   * Court address of the financier.
   *
   * @type {string}
   * @memberof ICreateFinancierCommand
   */
  courtAddress: string;
}
