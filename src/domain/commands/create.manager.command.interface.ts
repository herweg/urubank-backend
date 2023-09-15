export interface ICreateManagerCommand {
  /**
   * Full name of the manager.
   *
   * @type {string}
   * @memberof ICreateManagerCommand
   */
  fullName: string;
  /**
   * Email of the manager.
   *
   * @type {string}
   * @memberof ICreateManagerCommand
   */
  email: string;
  /**
   * Financier Id of the manager.
   *
   * @type {string}
   * @memberof ICreateManagerCommand
   */
  financierId: string;
}
