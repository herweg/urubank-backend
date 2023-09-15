import { v4 as uuid } from 'uuid';
import { IManagerEntity } from '../interfaces';

/**
 * Managers Domain Entity Base
 *
 * @export
 * @class ManagerDomainEntityBase
 * @implements {IManagerEntity}
 */
export class ManagerDomainEntityBase implements IManagerEntity {
  /**
   * UUID of the manager.
   *
   * @type {string}
   * @memberof ManagerDomainEntityBase
   */
  id?: string;
  /**
   * Full name of the manager.
   *
   * @type {string}
   * @memberof ManagerDomainEntityBase
   */
  fullName?: string;
  /**
   * Email of the manager.
   *
   * @type {string}
   * @memberof ManagerDomainEntityBase
   */
  email?: string;
  /**
   * Financier Id of the manager.
   *
   * @type {string}
   * @memberof ManagerDomainEntityBase
   */
  financierId?: string;
  /**
   * CreatedAt stamp of the manager.
   *
   * @type {number}
   * @memberof ManagerDomainEntityBase
   */
  createdAt?: number;

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {IManagerEntity} [_data] - IManagerEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: IManagerEntity) {
    this.id = _data?.id ? _data.id : uuid();
    if (_data?.fullName) this.fullName = _data.fullName;
    if (_data?.email) this.email = _data.email;
    if (_data?.financierId) this.financierId = _data.financierId;
    this.createdAt = Date.now();
  }
}
