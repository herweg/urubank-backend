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
   * It returns an Observable of LeadMongoEntity[] (an array of LeadMongoEntity objects) that is
   * obtained by mapping the result of the find() function of the MongoDB repository
   * @returns Observable<LeadMongoEntity[]>
   */
  findAll(): Observable<LeadMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found leads`);
        }
        return value;
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
    return from(this.repository.findBy({ userId: userId })).pipe(
      map((value) => {
        return value.filter((item) => item.status != 'FINALIZED');
      }),
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(
            `Error: not found active lead with userId: ${userId}`,
          );
        }
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }
}
