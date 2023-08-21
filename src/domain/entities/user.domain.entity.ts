import { v4 as uuid } from 'uuid';
import { IUserEntity } from '../interfaces';

/**
 * Users Domain Entity Base
 *
 * @export
 * @class UserDomainEntityBase
 * @implements {IUserEntity}
 */
export class UserDomainEntityBase implements IUserEntity {
  /**
   * UUID of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  id?: string;
  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  fullName?: string;
  /**
   * Phone of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  phone?: string;
  /**
   * Document of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  document?: string;
  /**
   * Email of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  email?: string;
  /**
   * Age of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  age?: string;
  /**
   * Salary of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  salary?: string;
  /**
   * Country of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  country?: string;
  /**
   * State of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  state?: string;
  /**
   * City of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  city?: string;
  /**
   * Address of the user.
   *
   * @type {string}
   * @memberof UserDomainEntityBase
   */
  address?: string;
  /**
   * Origin of the user.
   *
   * @type {string[]}
   * @memberof UserDomainEntityBase
   */
  origin?: string[];
  /**
   * CreatedAt stamp of the user.
   *
   * @type {number}
   * @memberof UserDomainEntityBase
   */
  createdAt?: number;

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {IUserEntity} [_data] - IUserEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: IUserEntity) {
    this.id = _data?.id ? _data.id : uuid();
    if (_data?.fullName) this.fullName = _data.fullName;
    if (_data?.phone) this.phone = _data.phone;
    if (_data?.document) this.document = _data.document;
    if (_data?.email) this.email = _data.email;
    if (_data?.age) this.age = _data.age;
    if (_data?.salary) this.salary = _data.salary;
    if (_data?.country) this.country = _data.country;
    if (_data?.city) this.city = _data.city;
    if (_data?.address) this.address = _data.address;
    if (_data?.origin) this.origin = _data.origin;
    this.createdAt = Date.now();
  }
}
