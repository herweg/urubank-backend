export interface IUpdateClientCommand {
  /**
   * UUID of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  id: string;
  /**
   * Type of the client (customer, employed, admin).
   *
   * @type {number}
   * @memberof IUpdateClientCommand
   */
  typeClient: number;
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  fullName: string;
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof IUpdateClientCommand
   */
  status: number;
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  document: string;
}
