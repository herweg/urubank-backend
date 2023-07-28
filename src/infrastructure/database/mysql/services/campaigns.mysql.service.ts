import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { CampaignMysqlEntity } from '../models';
import { CampaignsMysqlRepository } from '../repositories';
import { ICampaignsService } from '../../../../domain/interfaces';
import { CampaignDomainEntityBase } from '../../../../domain/entities';

/**
 * Campaigns mysql service class
 *
 * @export
 * @class CampaignsMysqlService
 * @implements {ICampaignsService<CampaignMysqlEntity>}
 */
@Injectable()
export class CampaignsMysqlService
  implements ICampaignsService<CampaignMysqlEntity>
{
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {CampaignsMysqlRepository} repository - CampaignsMysqlRepository
   */
  constructor(private readonly repository: CampaignsMysqlRepository) {}

  /**
   * > The function creates a new campaign entity in the database
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<CampaignMysqlEntity>
   */
  create(entity: CampaignDomainEntityBase): Observable<CampaignMysqlEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a CampaignDomainEntityBase object as a parameter, and returns an Observable of
   * CampaignMysqlEntity
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<CampaignMysqlEntity>
   */
  update(entity: CampaignDomainEntityBase): Observable<CampaignMysqlEntity> {
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
   * "Find all the campaigns in the database and return them as an array of CampaignMysqlEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of CampaignMysqlEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * CampaignMysqlEntity objects
   * @returns An observable of an array of CampaignMysqlEntity objects.
   */
  findAll(): Observable<CampaignMysqlEntity[]> {
    return this.repository.findAll();
  }

  /**
   * "Find a campaign by its id."
   *
   * The function is defined as an Observable of CampaignMysqlEntity
   * @param {string} id - The id of the campaign to find.
   * @returns Observable<CampaignMysqlEntity>
   */
  findById(id: string): Observable<CampaignMysqlEntity> {
    return this.repository.findById(id);
  }
}
