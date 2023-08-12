import { ISumecEntity } from '../interfaces';

/**
 * Sumec Domain Entity Base
 *
 * @export
 * @class SumecDomainEntityBase
 * @implements {ISumecEntity}
 */
export class SumecDomainEntityBase implements ISumecEntity {
  /**
   * ClientePreAprobado of sumec request.
   *
   * @type {string}
   * @memberof SumecDomainEntityBase
   */
  ClientePreAprobado?: string;
  /**
   * CuotasParaCapital of sumec request.
   *
   * @type {string[]}
   * @memberof SumecDomainEntityBase
   */
  CuotasParaCapital?: string[];

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {ISumecEntity} [_data] - ISumecEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: ISumecEntity) {
    if (_data?.ClientePreAprobado)
      this.ClientePreAprobado = _data.ClientePreAprobado;
    if (_data?.CuotasParaCapital)
      this.CuotasParaCapital = _data.CuotasParaCapital;
  }
}
