export interface IUpdateManagerCommand {
  /**
   * UUID of the manager.
   *
   * @type {string}
   * @memberof IUpdateManagerCommand
   */
  id: string;
  /**
   * Full name of the manager.
   *
   * @type {string}
   * @memberof IUpdateManagerCommand
   */
  fullName?: string;
  /**
   * Email of the manager.
   *
   * @type {string}
   * @memberof IUpdateManagerCommand
   */
  email?: string;
  /**
   * Financier Id of the manager.
   *
   * @type {string}
   * @memberof IUpdateManagerCommand
   */
  financierId?: string;
}
