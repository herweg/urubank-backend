import { Injectable, NotFoundException } from '@nestjs/common';
import { CampaignMysqlEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICampaignsRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { CampaignDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Campaigns for mysql
 *
 * @export
 * @class CampaignsMysqlRepository
 * @implements {ICampaignsRepository<CampaignMysqlEntity>}
 */
@Injectable()
export class CampaignsMysqlRepository
  implements ICampaignsRepository<CampaignMysqlEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<CampaignMysqlEntity>
   */
  constructor(
    @InjectRepository(CampaignMysqlEntity)
    private readonly repository: Repository<CampaignMysqlEntity>,
  ) {}

  /**
   * It takes a CampaignDomainEntityBase, saves it to the database, and returns a CampaignMysqlEntity
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase
   * @returns An Observable of CampaignMysqlEntity
   */
  create(entity: CampaignDomainEntityBase): Observable<CampaignMysqlEntity> {
    return from(this.repository.save(entity)).pipe(
      catchError((error: Error) => {
        const success = { success: false }
        error = Object.assign({}, error, success);
        throw error;
      }),
    );
  }

  /**
   * It updates a campaign in the database
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase
   * @returns Observable<CampaignMysqlEntity>
   */
  update(entity: CampaignDomainEntityBase): Observable<CampaignMysqlEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found campaign with id: ${entity.id}`,
          );
        }
      }),
      map((value) => {
        from(
          this.repository.update({ id: entity.id }, { ...value, ...entity }),
        ).subscribe();
        return { ...value, ...entity };
      }),
      catchError((error: Error) => {
        const success = { success: false }
        error = Object.assign({}, error, success);
        throw error;
      }),
    );
  }

  /**
   * "If the entity exists, delete it and return true, otherwise return false."
   *
   * The first thing we do is find the entity by its ID. If it doesn't exist, we return an observable
   * that emits false. If it does exist, we delete it and return an observable that emits true if the
   * delete was successful
   * @param {string} id - The id of the entity to remove.
   * @returns Observable<boolean>
   */
  remove(id: string): Observable<boolean> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      switchMap((entity) => {
        if (entity == null) {
          return of(false);
        }
        return from(this.repository.delete({ id: id })).pipe(
          map((deleteResult) => deleteResult.affected > 0),
        );
      }),
      catchError(() => {
        return of(false);
      }),
    );
  }

  // Reading

  /**
   * It returns an Observable of CampaignMysqlEntity[] (an array of CampaignMysqlEntity objects) that is
   * obtained by mapping the result of the find() function of the MysqlDB repository
   * @returns Observable<CampaignMysqlEntity[]>
   */
  findAll(): Observable<CampaignMysqlEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found campaigns`);
        }
        return value;
      }),
      catchError((error: Error) => {
        const success = { success: false }
        error = Object.assign({}, error, success);
        throw error;
      }),
    );
  }

  /**
   * It finds a campaign by its id and returns it as an observable
   * @param {string} id - string - the id of the campaign to find
   * @returns Observable<CampaignMysqlEntity>
   */
  findById(id: string): Observable<CampaignMysqlEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found campaign with id: ${id}`,
          );
        }
        return value;
      }),
      catchError((error: Error) => {
        const success = { success: false }
        error = Object.assign({}, error, success);
        throw error;
      }),
    );
  }
}
