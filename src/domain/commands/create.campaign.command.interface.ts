export interface ICreateCampaignCommand {
  /**
   * Financer UUID of the campaign.
   *
   * @type {string}
   * @memberof ICreateCampaignCommand
   */
  financerId: string;
  /**
   * Brand name of the campaign.
   *
   * @type {string}
   * @memberof ICreateCampaignCommand
   */
  brandName: string;
  /**
   * Phone of the campaign.
   *
   * @type {string}
   * @memberof ICreateCampaignCommand
   */
  phone: string;
}
