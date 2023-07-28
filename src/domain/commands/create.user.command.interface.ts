export interface ICreateUserCommand {
  /**
   * Type of the user.
   *
   * @type {number}
   * @memberof ICreateUserCommand
   */
  typeUser: number;
  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  fullName: string;
  /**
   * Phone of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  phone: string;
  /**
   * Document of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  document: string;
  /**
   * Email of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  email: string;
  /**
   * Country of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  country: string;
  /**
   * State of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  state: string;
  /**
   * City of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  city: string;
  /**
   * Address of the user.
   *
   * @type {string}
   * @memberof ICreateUserCommand
   */
  address: string;
  /**
   * Origin of the user.
   *
   * @type {string[]}
   * @memberof ICreateUserCommand
   */
  origin: string[];
}
