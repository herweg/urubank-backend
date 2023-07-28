import { v4 as uuid } from 'uuid';
import { IFinancierEntity } from '../interfaces';

/**
 * Financiers Domain Entity Base
 *
 * @export
 * @class FinancierDomainEntityBase
 * @implements {IFinancierEntity}
 */
export class FinancierDomainEntityBase implements IFinancierEntity {
  /**
   * UUID of the financier.
   *
   * @type {string}
   * @memberof FinancierDomainEntityBase
   */
  id?: string;
  /**
   * Brand name of the financier.
   *
   * @type {string}
   * @memberof FinancierDomainEntityBase
   */
  brandName: string;
  /**
   * Phones of the financier.
   *
   * @type {string[]}
   * @memberof FinancierDomainEntityBase
   */
  phones: string[];
  /**
   * Emails of the financier.
   *
   * @type {string[]}
   * @memberof FinancierDomainEntityBase
   */
  emails: string[];
  /**
   * Country of the financier.
   *
   * @type {string}
   * @memberof FinancierDomainEntityBase
   */
  country: string;
  /**
   * State of the financier.
   *
   * @type {string}
   * @memberof FinancierDomainEntityBase
   */
  state: string;
  /**
   * City of the financier.
   *
   * @type {string}
   * @memberof FinancierDomainEntityBase
   */
  city: string;
  /**
   * Court address of the financier.
   *
   * @type {string}
   * @memberof FinancierDomainEntityBase
   */
  courtAddress: string;

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {IFinancierEntity} [_data] - IFinancierEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: IFinancierEntity) {
    this.id = _data?.id ? _data.id : uuid();
    if (_data?.brandName) this.brandName = _data.brandName;
    if (_data?.country) this.country = _data.country;
    if (_data?.state) this.state = _data.state;
    if (_data?.city) this.city = _data.city;
    if (_data?.courtAddress) this.courtAddress = _data.courtAddress;
    if (_data?.emails) this.emails = _data.emails;
    if (_data?.phones) this.phones = _data.phones;
    if (_data?.city) this.city = _data.city;
  }
}
