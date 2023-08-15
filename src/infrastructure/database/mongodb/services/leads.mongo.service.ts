import { Injectable } from '@nestjs/common';
import { Observable, combineLatest, map } from 'rxjs';
import {
  CampaignMongoEntity,
  FinancierMongoEntity,
  LeadMongoEntity,
} from '../models';
import { LeadsMongoRepository } from '../repositories';
import { ILeadsService } from '../../../../domain/interfaces';
import { LeadDomainEntityBase } from '../../../../domain/entities';
import { CampaignsMongoService } from './campaigns.mongo.service';
import { UsersMongoService } from './users.mongo.service';

/**
 * Leads mongo service class
 *
 * @export
 * @class LeadsMongoService
 * @implements {ILeadsService<LeadMongoEntity>}
 */
@Injectable()
export class LeadsMongoService implements ILeadsService<LeadMongoEntity> {
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {LeadsMongoRepository} repository - LeadsMongoRepository
   */
  constructor(
    private readonly repository: LeadsMongoRepository,
    private readonly repositoryCampaigns: CampaignsMongoService,
    private readonly repositoryUsers: UsersMongoService,
  ) {}

  /**
   * > The function creates a new lead entity in the database
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<LeadMongoEntity>
   */
  create(entity: LeadDomainEntityBase): Observable<LeadMongoEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a LeadDomainEntityBase object as a parameter, and returns an Observable of
   * LeadMongoEntity
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<LeadMongoEntity>
   */
  update(entity: LeadDomainEntityBase): Observable<LeadMongoEntity> {
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
   * "Find all the leads in the database and return them as an array of LeadMongoEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of LeadMongoEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * LeadMongoEntity objects
   * @returns An observable of an array of LeadMongoEntity objects.
   */
  findAll(): Observable<LeadMongoEntity[]> {
    const leads = this.repository.findAll();
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
   * The function is defined as an Observable of LeadMongoEntity
   * @param {string} id - The id of the lead to find.
   * @returns Observable<LeadMongoEntity>
   */
  findById(id: string): Observable<LeadMongoEntity> {
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
   * The function is defined as an Observable of LeadMongoEntity[]
   * @param {string} userId - The id of the user to find.
   * @returns Observable<LeadMongoEntity[]>
   */
  findActiveLeadsByUserId(userId: string): Observable<LeadMongoEntity[]> {
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
   * The function is defined as an Observable of LeadMongoEntity[]
   * @param {string} financierId - The id of the financier to find.
   * @returns Observable<LeadMongoEntity[]>
   */
  findAllByFinancierId(financierId: string): Observable<LeadMongoEntity[]> {
    const leads = this.repository.findAll();
    const users = this.repositoryUsers.findAll();
    const campaigns = this.repositoryCampaigns.findAll();
    return combineLatest([leads, users, campaigns]).pipe(
      map(([led, use, camp]) => {
        return led
          .map((item) => {
            item.campaignId =
              camp.find((find) => find.id == item.campaignId) ||
              item.campaignId;
            if (
              item.campaignId instanceof CampaignMongoEntity &&
              item.campaignId.financerId instanceof FinancierMongoEntity &&
              item.campaignId.financerId.id == financierId
            ) {
              item.userId =
                use.find((find) => find.id == item.userId) || item.userId;
              return item;
            }
          })
          .filter((value) => value != null);
      }),
    );
  }
}
