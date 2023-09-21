import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserMysqlEntity } from '../models';
import { UsersMysqlRepository } from '../repositories';
import { IUsersService } from '../../../../domain/interfaces';
import { UserDomainEntityBase } from '../../../../domain/entities';

/**
 * Users mysql service class
 *
 * @export
 * @class UsersMysqlService
 * @implements {IUsersService<UserMysqlEntity>}
 */
@Injectable()
export class UsersMysqlService implements IUsersService<UserMysqlEntity> {
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {UsersMysqlRepository} repository - UsersMysqlRepository
   */
  constructor(private readonly repository: UsersMysqlRepository) {}

  /**
   * > The function creates a new user entity in the database
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<UserMysqlEntity>
   */
  create(entity: UserDomainEntityBase): Observable<UserMysqlEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a UserDomainEntityBase object as a parameter, and returns an Observable of
   * UserMysqlEntity
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<UserMysqlEntity>
   */
  update(entity: UserDomainEntityBase): Observable<UserMysqlEntity> {
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
   * "Find all the users in the database and return them as an array of UserMysqlEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of UserMysqlEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * UserMysqlEntity objects
   * @returns An observable of an array of UserMysqlEntity objects.
   */
  findAll(): Observable<UserMysqlEntity[]> {
    return this.repository.findAll();
  }

  /**
   * "Find a user by its id."
   *
   * The function is defined as an Observable of UserMysqlEntity
   * @param {string} id - The id of the user to find.
   * @returns Observable<UserMysqlEntity>
   */
  findById(id: string): Observable<UserMysqlEntity> {
    return this.repository.findById(id);
  }

  /**
   * "Find a user by its document."
   *
   * The function is defined as an Observable of UserMysqlEntity
   * @param {string} document - The document of the user to find.
   * @returns Observable<UserMysqlEntity>
   */
  findByDocument(document: string): Observable<UserMysqlEntity> {
    return this.repository.findByDocument(document);
  }
}
