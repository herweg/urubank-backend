import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ManagerMongoEntity } from '../models';
import { ManagersMongoRepository } from '../repositories';
import { IManagersService } from '../../../../domain/interfaces';
import { ManagerDomainEntityBase } from '../../../../domain/entities';

/**
 * Managers mongo service class
 *
 * @export
 * @class ManagersMongoService
 * @implements {IManagersService<ManagerMongoEntity>}
 */
@Injectable()
export class ManagersMongoService
  implements IManagersService<ManagerMongoEntity>
{
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {ManagersMongoRepository} repository - ManagersMongoRepository
   */
  constructor(private readonly repository: ManagersMongoRepository) {}

  /**
   * > The function creates a new manager entity in the database
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<ManagerMongoEntity>
   */
  create(entity: ManagerDomainEntityBase): Observable<ManagerMongoEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a ManagerDomainEntityBase object as a parameter, and returns an Observable of
   * ManagerMongoEntity
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<ManagerMongoEntity>
   */
  update(entity: ManagerDomainEntityBase): Observable<ManagerMongoEntity> {
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
   * "Find all the managers in the database and return them as an array of ManagerMongoEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of ManagerMongoEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * ManagerMongoEntity objects
   * @returns An observable of an array of ManagerMongoEntity objects.
   */
  findAll(): Observable<ManagerMongoEntity[]> {
    return this.repository.findAll();
  }

  /**
   * "Find a manager by its id."
   *
   * The function is defined as an Observable of ManagerMongoEntity
   * @param {string} id - The id of the manager to find.
   * @returns Observable<ManagerMongoEntity>
   */
  findById(id: string): Observable<ManagerMongoEntity> {
    return this.repository.findById(id);
  }

  /**
   * "Find a manager by its email."
   *
   * The function is defined as an Observable of ManagerMongoEntity
   * @param {string} email - The email of the manager to find.
   * @returns Observable<ManagerMongoEntity>
   */
  findByEmail(email: string): Observable<ManagerMongoEntity> {
    return this.repository.findByEmail(email);
  }
}
