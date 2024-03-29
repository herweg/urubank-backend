import { v4 as uuid } from 'uuid';
import { ILeadEntity } from '../interfaces';
import { CampaignDomainEntityBase, UserDomainEntityBase } from '.';

/**
 * Leads Domain Entity Base
 *
 * @export
 * @class LeadDomainEntityBase
 * @implements {ILeadEntity}
 */
export class LeadDomainEntityBase implements ILeadEntity {
  /**
   * UUID of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  id?: string;
  /**
   * Campaign UUID of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  campaignId?: string | CampaignDomainEntityBase;
  /**
   * User UUID of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  userId?: string | UserDomainEntityBase;
  /**
   * Status of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  status?: string;
  /**
   * Amount of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  amount?: string;
  /**
   * Final amount of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  finalAmount?: string;
  /**
   * Quotas of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  quotas?: string;
  /**
   * Quotas amount of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  quotasAmount?: string;
  /**
   * Clearing of the lead.
   *
   * @type {boolean}
   * @memberof LeadDomainEntityBase
   */
  clearing?: boolean;
  /**
   * Document photo of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  documentPhoto?: string;
  /**
   * Document back photo of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  documentBackPhoto?: string;
  /**
   * Front photo of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  frontPhoto?: string;
  /**
   * Invoice photo of the lead.
   *
   * @type {string}
   * @memberof LeadDomainEntityBase
   */
  invoicePhoto?: string;
  /**
   * CreatedAt stamp of the lead.
   *
   * @type {number}
   * @memberof LeadDomainEntityBase
   */
  createdAt?: number;
  /**
   * CompletedAt stamp of the lead.
   *
   * @type {number}
   * @memberof LeadDomainEntityBase
   */
  completedAt?: number;

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {ILeadEntity} [_data] - ILeadEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: ILeadEntity) {
    this.id = _data?.id ? _data.id : uuid();
    if (_data?.campaignId) this.campaignId = _data.campaignId;
    if (_data?.userId) this.userId = _data.userId;
    if (_data?.amount) this.amount = _data.amount;
    if (_data?.finalAmount) this.finalAmount = _data.finalAmount;
    if (_data?.quotas) this.quotas = _data.quotas;
    if (_data?.quotasAmount) this.quotasAmount = _data.quotasAmount;
    if (_data?.status) this.status = _data.status;
    if (_data?.clearing != undefined) this.clearing = _data.clearing;
    if (_data?.documentPhoto) this.documentPhoto = _data.documentPhoto;
    if (_data?.documentBackPhoto)
      this.documentBackPhoto = _data.documentBackPhoto;
    if (_data?.frontPhoto) this.frontPhoto = _data.frontPhoto;
    if (_data?.invoicePhoto) this.invoicePhoto = _data.invoicePhoto;
    if (_data?.createdAt) this.createdAt = _data.createdAt;
    if (_data?.completedAt) this.completedAt = _data.completedAt;
    this.createdAt = Date.now();
  }
}
