export interface ICreateClientCommand {
  /**
   * Type of the client.
   *
   * @type {number}
   * @memberof ICreateClientCommand
   */
  typeClient: number;
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof ICreateClientCommand
   */
  fullName: string;
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof ICreateClientCommand
   */
  status: number;
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof ICreateClientCommand
   */
  document: string;
}
