import { IFinancierEntity } from '.';

/**
 * Campaign entity interface
 *
 * @export
 * @interface ICampaignEntity
 */
export interface ICampaignEntity {
  /**
   * UUID of the campaign.
   *
   * @type {string}
   * @memberof ICampaignEntity
   */
  id?: string;
  /**
   * Financer UUID of the campaign.
   *
   * @type {string}
   * @memberof ICampaignEntity
   */
  financerId?: string | IFinancierEntity;
  /**
   * Brand name of the campaign.
   *
   * @type {string}
   * @memberof ICampaignEntity
   */
  brandName?: string;
  /**
   * Phone of the campaign.
   *
   * @type {string}
   * @memberof ICampaignEntity
   */
  phone?: string;
}
