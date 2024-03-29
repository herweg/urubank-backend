export interface ICreateLeadCommand {
  /**
   * Campaign UUID of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  campaignId: string;
  /**
   * User UUID of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  userId: string;
  /**
   * Status of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  status: string;
  /**
   * Amount of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  amount: string;
  /**
   * Final amount of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  finalAmount: string;
  /**
   * Quotas of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  quotas: string;
  /**
   * Quotas amount of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  quotasAmount: string;
  /**
   * Clearing of the lead.
   *
   * @type {boolean}
   * @memberof ICreateLeadCommand
   */
  clearing: boolean;
  /**
   * Document photo of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  documentPhoto: string;
  /**
   * Document back photo of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  documentBackPhoto: string;
  /**
   * Front photo of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  frontPhoto: string;
  /**
   * Invoice photo of the lead.
   *
   * @type {string}
   * @memberof ICreateLeadCommand
   */
  invoicePhoto: string;
}
