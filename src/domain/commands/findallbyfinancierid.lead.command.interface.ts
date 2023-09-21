export interface IFindAllByFinancierIdLeadCommand {
  /**
   * FinancierId for find.
   *
   * @type {string}
   * @memberof IFindAllByFinancierIdLeadCommand
   */
  financierId: string;
  /**
   * Min date for find.
   *
   * @type {number}
   * @memberof IFindAllByFinancierIdLeadCommand
   */
  minDate?: number;
  /**
   * Max date for find.
   *
   * @type {number}
   * @memberof IFindAllByFinancierIdLeadCommand
   */
  maxDate?: number;
}
