export interface IUpdateLeadCommand {
  /**
   * UUID of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  id?: string;
  /**
   * Campaign UUID of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  campaignId: string;
  /**
   * User UUID of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  userId: string;
  /**
   * Status of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  status: string;
  /**
   * Amount of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  amount: string;
  /**
   * Final amount of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  finalAmount: string;
  /**
   * Quotas of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  quotas: string;
  /**
   * Clearing of the lead.
   *
   * @type {boolean}
   * @memberof IUpdateLeadCommand
   */
  clearing: boolean;
  /**
   * Document photo of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  documentPhoto: string;
  /**
   * Front photo of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  frontPhoto: string;
  /**
   * Invoice photo of the lead.
   *
   * @type {string}
   * @memberof IUpdateLeadCommand
   */
  invoicePhoto: string;
}
