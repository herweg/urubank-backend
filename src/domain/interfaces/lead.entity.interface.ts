import { ICampaignEntity, IUserEntity } from '.';

/**
 * Lead entity interface
 *
 * @export
 * @interface ILeadEntity
 */
export interface ILeadEntity {
  /**
   * UUID of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  id?: string;
  /**
   * Campaign UUID of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  campaignId: string | ICampaignEntity;
  /**
   * User UUID of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  userId: string | IUserEntity;
  /**
   * Status of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  status: string;
  /**
   * Amount of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  amount: string;
  /**
   * Final amount of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  finalAmount: string;
  /**
   * Quotas of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  quotas: string;
  /**
   * Quotas amount of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  quotasAmount: string;
  /**
   * Clearing of the lead.
   *
   * @type {boolean}
   * @memberof ILeadEntity
   */
  clearing: boolean;
  /**
   * Document photo of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  documentPhoto: string;
  /**
   * Front photo of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  frontPhoto: string;
  /**
   * Invoice photo of the lead.
   *
   * @type {string}
   * @memberof ILeadEntity
   */
  invoicePhoto: string;
  /**
   * CreatedAt stamp of the lead.
   *
   * @type {number}
   * @memberof ILeadEntity
   */
  createdAt?: number;
  /**
   * CompletedAt stamp of the lead.
   *
   * @type {number}
   * @memberof ILeadEntity
   */
  completedAt?: number;
}
