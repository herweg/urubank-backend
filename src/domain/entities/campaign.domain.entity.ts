import { v4 as uuid } from 'uuid';
import { ICampaignEntity } from '../interfaces';
import { FinancierDomainEntityBase } from '.';

/**
 * Campaigns Domain Entity Base
 *
 * @export
 * @class CampaignDomainEntityBase
 * @implements {ICampaignEntity}
 */
export class CampaignDomainEntityBase implements ICampaignEntity {
  /**
   * UUID of the campaign.
   *
   * @type {string}
   * @memberof CampaignDomainEntityBase
   */
  id?: string;
  /**
   * Financer UUID of the campaign.
   *
   * @type {string}
   * @memberof CampaignDomainEntityBase
   */
  financerId: string | FinancierDomainEntityBase;
  /**
   * Brand name of the campaign.
   *
   * @type {string}
   * @memberof CampaignDomainEntityBase
   */
  brandName: string;
  /**
   * Phone of the campaign.
   *
   * @type {string}
   * @memberof CampaignDomainEntityBase
   */
  phone: string;

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {ICampaignEntity} [_data] - ICampaignEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: ICampaignEntity) {
    this.id = _data?.id ? _data.id : uuid();
    if (_data?.financerId) this.financerId = _data.financerId;
    if (_data?.brandName) this.brandName = _data.brandName;
    if (_data?.phone) this.phone = _data.phone;
  }
}
