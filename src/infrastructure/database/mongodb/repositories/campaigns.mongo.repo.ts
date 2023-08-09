import { Injectable, NotFoundException } from '@nestjs/common';
import { CampaignMongoEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICampaignsRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { CampaignDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Campaigns for mongo
 *
 * @export
 * @class CampaignsMongoRepository
 * @implements {ICampaignsRepository<CampaignMongoEntity>}
 */
@Injectable()
export class CampaignsMongoRepository
  implements ICampaignsRepository<CampaignMongoEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<CampaignMongoEntity>
   */
  constructor(
    @InjectRepository(CampaignMongoEntity)
    private readonly repository: Repository<CampaignMongoEntity>,
  ) {}

  /**
   * It takes a CampaignDomainEntityBase, saves it to the database, and returns a CampaignMongoEntity
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase
   * @returns An Observable of CampaignMongoEntity
   */
  create(entity: CampaignDomainEntityBase): Observable<CampaignMongoEntity> {
    return from(this.repository.save(entity)).pipe(
      map((value) => {
        delete value._id;
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It updates a campaign in the database
   * @param {CampaignDomainEntityBase} entity - CampaignDomainEntityBase
   * @returns Observable<CampaignMongoEntity>
   */
  update(entity: CampaignDomainEntityBase): Observable<CampaignMongoEntity> {
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
        delete value._id;
        return { ...value, ...entity };
      }),
      catchError((error: Error) => {
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
   * It returns an Observable of CampaignMongoEntity[] (an array of CampaignMongoEntity objects) that is
   * obtained by mapping the result of the find() function of the MongoDB repository
   * @returns Observable<CampaignMongoEntity[]>
   */
  findAll(): Observable<CampaignMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found campaigns`);
        }
        return value.map((item) => {
          delete item._id;
          return item;
        });
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a campaign by its id and returns it as an observable
   * @param {string} id - string - the id of the campaign to find
   * @returns Observable<CampaignMongoEntity>
   */
  findById(id: string): Observable<CampaignMongoEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found campaign with id: ${id}`,
          );
        }
        delete value._id;
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }
}
