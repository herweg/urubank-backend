import * as fs from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LeadMongoEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ILeadsRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { LeadDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Leads for mongo
 *
 * @export
 * @class LeadsMongoRepository
 * @implements {ILeadsRepository<LeadMongoEntity>}
 */
@Injectable()
export class LeadsMongoRepository implements ILeadsRepository<LeadMongoEntity> {
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<LeadMongoEntity>
   */
  constructor(
    @InjectRepository(LeadMongoEntity)
    private readonly repository: Repository<LeadMongoEntity>,
  ) {}

  /**
   * It takes a LeadDomainEntityBase, saves it to the database, and returns a LeadMongoEntity
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase
   * @returns An Observable of LeadMongoEntity
   */
  create(entity: LeadDomainEntityBase): Observable<LeadMongoEntity> {
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
   * It updates a lead in the database
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase
   * @returns Observable<LeadMongoEntity>
   */
  update(entity: LeadDomainEntityBase): Observable<LeadMongoEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found lead with id: ${entity.id}`,
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
        const dir = './assets/images/';
        const url = 'https://api.going.uy/assets/images/';
        const urlDoc = entity.documentPhoto
          ? entity.documentPhoto.replace(url, '')
          : null;
        const urlDocBack = entity.documentBackPhoto
          ? entity.documentBackPhoto.replace(url, '')
          : null;
        const urlFront = entity.frontPhoto
          ? entity.frontPhoto.replace(url, '')
          : null;
        const urlInvoice = entity.invoicePhoto
          ? entity.invoicePhoto.replace(url, '')
          : null;
        if (urlDoc != null && fs.existsSync(dir + urlDoc))
          fs.rmSync(dir + urlDoc);
        if (urlDocBack != null && fs.existsSync(dir + urlDocBack))
          fs.rmSync(dir + urlDocBack);
        if (urlFront != null && fs.existsSync(dir + urlFront))
          fs.rmSync(dir + urlFront);
        if (urlInvoice != null && fs.existsSync(dir + urlInvoice))
          fs.rmSync(dir + urlInvoice);
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
   * It returns an Observable of LeadMongoEntity[] (an array of LeadMongoEntity objects) that is
   * obtained by mapping the result of the find() function of the MongoDB repository
   * @returns Observable<LeadMongoEntity[]>
   */
  findAll(minDate?: number, maxDate?: number): Observable<LeadMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found leads`);
        }
        return value
          .map((item) => {
            delete item._id;
            return item;
          })
          .filter(
            (item) =>
              item.createdAt >= (minDate || 0) &&
              item.createdAt <= (maxDate || Infinity),
          );
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a lead by its id and returns it as an observable
   * @param {string} id - string - the id of the lead to find
   * @returns Observable<LeadMongoEntity>
   */
  findById(id: string): Observable<LeadMongoEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(`Error: not found lead with id: ${id}`);
        }
        delete value._id;
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a active lead by user id and returns it as an observable
   * @param {string} userId - string - the userId of the lead to find
   * @returns Observable<LeadMongoEntity[]>
   */
  findActiveLeadsByUserId(userId: string): Observable<LeadMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        return value.filter(
          (item) => item.status != 'FINALIZED' && item.userId == userId,
        );
      }),
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(
            `Error: not found active lead with userId: ${userId}`,
          );
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
}
