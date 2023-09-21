import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { FinancierMongoEntity } from '../models';
import { FinanciersMongoRepository } from '../repositories';
import { IFinanciersService } from '../../../../domain/interfaces';
import { FinancierDomainEntityBase } from '../../../../domain/entities';

/**
 * Financiers mongo service class
 *
 * @export
 * @class FinanciersMongoService
 * @implements {IFinanciersService<FinancierMongoEntity>}
 */
@Injectable()
export class FinanciersMongoService
  implements IFinanciersService<FinancierMongoEntity>
{
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {FinanciersMongoRepository} repository - FinanciersMongoRepository
   */
  constructor(private readonly repository: FinanciersMongoRepository) {}

  /**
   * > The function creates a new financier entity in the database
   * @param {FinancierDomainEntityBase} entity - FinancierDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<FinancierMongoEntity>
   */
  create(entity: FinancierDomainEntityBase): Observable<FinancierMongoEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a FinancierDomainEntityBase object as a parameter, and returns an Observable of
   * FinancierMongoEntity
   * @param {FinancierDomainEntityBase} entity - FinancierDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<FinancierMongoEntity>
   */
  update(entity: FinancierDomainEntityBase): Observable<FinancierMongoEntity> {
    return this.repository.update(entity);
  }

  /**
   * "Remove the item with the given id from the repository and return an observable that will emit true
   * if the item was removed and false if it wasn't."
   *
   * The first thing we do is call the remove function on the repository. This function returns an
   * observable that will emit true if the item was removed and false if it wasn't
   * @param {string} id - The id of the entity to remove.
   * @returns Observable<boolean>
   */
  remove(id: string): Observable<boolean> {
    return this.repository.remove(id);
  }

  /**
   * "Find all the financiers in the database and return them as an array of FinancierMongoEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of FinancierMongoEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * FinancierMongoEntity objects
   * @returns An observable of an array of FinancierMongoEntity objects.
   */
  findAll(): Observable<FinancierMongoEntity[]> {
    return this.repository.findAll();
  }

  /**
   * "Find a financier by its id."
   *
   * The function is defined as an Observable of FinancierMongoEntity
   * @param {string} id - The id of the financier to find.
   * @returns Observable<FinancierMongoEntity>
   */
  findById(id: string): Observable<FinancierMongoEntity> {
    return this.repository.findById(id);
  }
}
