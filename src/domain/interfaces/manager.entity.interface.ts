/**
 * Manager entity interface
 *
 * @export
 * @interface IManagerEntity
 */
export interface IManagerEntity {
  /**
   * UUID of the manager.
   *
   * @type {string}
   * @memberof IManagerEntity
   */
  id?: string;
  /**
   * Full name of the manager.
   *
   * @type {string}
   * @memberof IManagerEntity
   */
  fullName?: string;
  /**
   * Email of the manager.
   *
   * @type {string}
   * @memberof IManagerEntity
   */
  email?: string;
  /**
   * Financier ID of the manager.
   *
   * @type {string}
   * @memberof IManagerEntity
   */
  financierId?: string;
  /**
   * CreatedAt stamp of the manager.
   *
   * @type {number}
   * @memberof IManagerEntity
   */
  createdAt?: number;
}
