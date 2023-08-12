/**
 * User entity interface
 *
 * @export
 * @interface IUserEntity
 */
export interface IUserEntity {
  /**
   * UUID of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  id?: string;
  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  fullName: string;
  /**
   * Phone of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  phone: string;
  /**
   * Document of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  document: string;
  /**
   * Email of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  email: string;
  /**
   * Age of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  age: string;
  /**
   * Salary of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  salary: string;
  /**
   * Country of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  country: string;
  /**
   * State of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  state: string;
  /**
   * City of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  city: string;
  /**
   * Address of the user.
   *
   * @type {string}
   * @memberof IUserEntity
   */
  address: string;
  /**
   * Origin of the user.
   *
   * @type {string[]}
   * @memberof IUserEntity
   */
  origin: string[];
  /**
   * CreatedAt stamp of the user.
   *
   * @type {number}
   * @memberof IUserEntity
   */
  createdAt?: number;
}
