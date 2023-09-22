import * as fs from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LeadMysqlEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ILeadsRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { LeadDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Leads for mysql
 *
 * @export
 * @class LeadsMysqlRepository
 * @implements {ILeadsRepository<LeadMysqlEntity>}
 */
@Injectable()
export class LeadsMysqlRepository implements ILeadsRepository<LeadMysqlEntity> {
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<LeadMysqlEntity>
   */
  constructor(
    @InjectRepository(LeadMysqlEntity)
    private readonly repository: Repository<LeadMysqlEntity>,
  ) {}

  /**
   * It takes a LeadDomainEntityBase, saves it to the database, and returns a LeadMysqlEntity
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase
   * @returns An Observable of LeadMysqlEntity
   */
  create(entity: LeadDomainEntityBase): Observable<LeadMysqlEntity> {
    return from(this.repository.save(entity)).pipe(
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It updates a lead in the database
   * @param {LeadDomainEntityBase} entity - LeadDomainEntityBase
   * @returns Observable<LeadMysqlEntity>
   */
  update(entity: LeadDomainEntityBase): Observable<LeadMysqlEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found lead with id: ${entity.id}`,
          });
        }
      }),
      map((value) => {
        from(
          this.repository.update({ id: entity.id }, { ...value, ...entity }),
        ).subscribe();
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
   * It returns an Observable of LeadMysqlEntity[] (an array of LeadMysqlEntity objects) that is
   * obtained by mapping the result of the find() function of the MysqlDB repository
   * @returns Observable<LeadMysqlEntity[]>
   */
  findAll(minDate?: number, maxDate?: number): Observable<LeadMysqlEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found leads`,
          });
        }
        return value.filter(
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
   * @returns Observable<LeadMysqlEntity>
   */
  findById(id: string): Observable<LeadMysqlEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found lead with id: ${id}`,
          });
        }
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
   * @returns Observable<LeadMysqlEntity[]>
   */
  findActiveLeadsByUserId(userId: string): Observable<LeadMysqlEntity[]> {
    return from(this.repository.findBy({ userId: userId })).pipe(
      map((value) => {
        return value.filter((item) => item.status != 'FINALIZED');
      }),
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found active lead with userId: ${userId}`,
          });
        }
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }
}
