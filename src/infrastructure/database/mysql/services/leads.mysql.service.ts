import { Injectable } from '@nestjs/common';
import { Observable, combineLatest, map } from 'rxjs';
import {
  CampaignMysqlEntity,
  FinancierMysqlEntity,
  LeadMysqlEntity,
} from '../models';
import { LeadsMysqlRepository } from '../repositories';
import { ILeadsService } from '../../../../domain/interfaces';
import { LeadDomainEntityBase } from '../../../../domain/entities';
import { CampaignsMysqlService } from './campaigns.mysql.service';
import { UsersMysqlService } from './users.mysql.service';

/**
 * Leads mysql service class
 *
 * @export
 * @class LeadsMysqlService
 * @implements {ILeadsService<LeadMysqlEntity>}
 */
@Injectable()
export class LeadsMysqlService implements ILeadsService<LeadMysqlEntity> {
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {LeadsMysqlRepository} repository - LeadsMysqlRepository
   */
  constructor(
    private readonly repository: LeadsMysqlRepository,
    private readonly repositoryCampaigns: CampaignsMysqlService,
    private readonly repositoryUsers: UsersMysqlService,
  ) {}

  /**
   * > The function creates a new lead entity in the database
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<LeadMysqlEntity>
   */
  create(entity: LeadDomainEntityBase): Observable<LeadMysqlEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a LeadDomainEntityBase object as a parameter, and returns an Observable of
   * LeadMysqlEntity
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<LeadMysqlEntity>
   */
  update(entity: LeadDomainEntityBase): Observable<LeadMysqlEntity> {
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
   * "Find all the leads in the database and return them as an array of LeadMysqlEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of LeadMysqlEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * LeadMysqlEntity objects
   * @returns An observable of an array of LeadMysqlEntity objects.
   */
  findAll(minDate?: number, maxDate?: number): Observable<LeadMysqlEntity[]> {
    const leads = this.repository.findAll(minDate, maxDate);
    const users = this.repositoryUsers.findAll();
    const campaigns = this.repositoryCampaigns.findAll();
    return combineLatest([leads, users, campaigns]).pipe(
      map(([led, use, camp]) => {
        return led.map((item) => {
          item.userId =
            use.find((find) => find.id == item.userId) || item.userId;
          item.campaignId =
            camp.find((find) => find.id == item.campaignId) || item.campaignId;
          return item;
        });
      }),
    );
  }

  /**
   * "Find a lead by its id."
   *
   * The function is defined as an Observable of LeadMysqlEntity
   * @param {string} id - The id of the lead to find.
   * @returns Observable<LeadMysqlEntity>
   */
  findById(id: string): Observable<LeadMysqlEntity> {
    const leads = this.repository.findById(id);
    const users = this.repositoryUsers.findAll();
    const campaigns = this.repositoryCampaigns.findAll();
    return combineLatest([leads, users, campaigns]).pipe(
      map(([led, use, camp]) => {
        led.userId = use.find((find) => find.id == led.userId) || led.userId;
        led.campaignId =
          camp.find((find) => find.id == led.campaignId) || led.campaignId;
        return led;
      }),
    );
  }

  /**
   * "Find leads by its userid."
   *
   * The function is defined as an Observable of LeadMysqlEntity[]
   * @param {string} userId - The id of the lead to find.
   * @returns Observable<LeadMysqlEntity[]>
   */
  findActiveLeadsByUserId(userId: string): Observable<LeadMysqlEntity[]> {
    const leads = this.repository.findActiveLeadsByUserId(userId);
    const users = this.repositoryUsers.findAll();
    const campaigns = this.repositoryCampaigns.findAll();
    return combineLatest([leads, users, campaigns]).pipe(
      map(([led, use, camp]) => {
        return led.map((item) => {
          item.userId =
            use.find((find) => find.id == item.userId) || item.userId;
          item.campaignId =
            camp.find((find) => find.id == item.campaignId) || item.campaignId;
          return item;
        });
      }),
    );
  }
  /**
   * "Find leads by financierId."
   *
   * The function is defined as an Observable of LeadMysqlEntity[]
   * @param {string} financierId - The id of the financier to find.
   * @returns Observable<LeadMysqlEntity[]>
   */
  findAllByFinancierId(
    financierId: string,
    minDate?: number,
    maxDate?: number,
  ): Observable<LeadMysqlEntity[]> {
    const leads = this.repository.findAll(minDate, maxDate);
    const users = this.repositoryUsers.findAll();
    const campaigns = this.repositoryCampaigns.findAll();
    return combineLatest([leads, users, campaigns]).pipe(
      map(([led, use, camp]) => {
        return led.map((item) => {
          item.campaignId =
            camp.find((find) => find.id == item.campaignId) || item.campaignId;
          if (
            item.campaignId instanceof CampaignMysqlEntity &&
            item.campaignId.financerId instanceof FinancierMysqlEntity &&
            item.campaignId.financerId.id == financierId
          ) {
            item.userId =
              use.find((find) => find.id == item.userId) || item.userId;
            return item;
          }
        });
      }),
    );
  }
}
