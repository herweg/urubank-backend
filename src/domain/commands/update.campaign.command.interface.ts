export interface IUpdateCampaignCommand {
  /**
   * UUID of the campaign.
   *
   * @type {string}
   * @memberof IUpdateCampaignCommand
   */
  id?: string;
  /**
   * Financer UUID of the campaign.
   *
   * @type {string}
   * @memberof IUpdateCampaignCommand
   */
  financerId: string;
  /**
   * Brand name of the campaign.
   *
   * @type {string}
   * @memberof IUpdateCampaignCommand
   */
  brandName: string;
  /**
   * Phone of the campaign.
   *
   * @type {string}
   * @memberof IUpdateCampaignCommand
   */
  phone: string;
}
