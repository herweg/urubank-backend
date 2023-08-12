export interface IUpdateUserCommand {
  /**
   * UUID of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  id: string;
  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  fullName: string;
  /**
   * Phone of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  phone: string;
  /**
   * Document of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  document: string;
  /**
   * Email of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  email: string;
  /**
   * Age of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  age: string;
  /**
   * Salary of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  salary: string;
  /**
   * Country of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  country: string;
  /**
   * State of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  state: string;
  /**
   * City of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  city: string;
  /**
   * Address of the user.
   *
   * @type {string}
   * @memberof IUpdateUserCommand
   */
  address: string;
  /**
   * Origin of the user.
   *
   * @type {string[]}
   * @memberof IUpdateUserCommand
   */
  origin: string[];
}
