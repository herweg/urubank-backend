import { Injectable, NotFoundException } from '@nestjs/common';
import { FinancierMysqlEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IFinanciersRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { FinancierDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Financiers for mysql
 *
 * @export
 * @class FinanciersMysqlRepository
 * @implements {IFinanciersRepository<FinancierMysqlEntity>}
 */
@Injectable()
export class FinanciersMysqlRepository
  implements IFinanciersRepository<FinancierMysqlEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<FinancierMysqlEntity>
   */
  constructor(
    @InjectRepository(FinancierMysqlEntity)
    private readonly repository: Repository<FinancierMysqlEntity>,
  ) {}

  /**
   * It takes a FinancierDomainEntityBase, saves it to the database, and returns a FinancierMysqlEntity
   * @param {FinancierDomainEntityBase} entity - FinancierDomainEntityBase
   * @returns An Observable of FinancierMysqlEntity
   */
  create(entity: FinancierDomainEntityBase): Observable<FinancierMysqlEntity> {
    return from(this.repository.save(entity)).pipe(
      catchError((error: Error) => {
        const success = { success: false }
        error = Object.assign({}, error, success);
        throw error;
      }),
    );
  }

  /**
   * It updates a financier in the database
   * @param {FinancierDomainEntityBase} entity - FinancierDomainEntityBase
   * @returns Observable<FinancierMysqlEntity>
   */
  update(entity: FinancierDomainEntityBase): Observable<FinancierMysqlEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found financier with id: ${entity.id}`,
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
   * It returns an Observable of FinancierMysqlEntity[] (an array of FinancierMysqlEntity objects) that is
   * obtained by mapping the result of the find() function of the MysqlDB repository
   * @returns Observable<FinancierMysqlEntity[]>
   */
  findAll(): Observable<FinancierMysqlEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found financiers`);
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
   * It finds a financier by its id and returns it as an observable
   * @param {string} id - string - the id of the financier to find
   * @returns Observable<FinancierMysqlEntity>
   */
  findById(id: string): Observable<FinancierMysqlEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found financier with id: ${id}`,
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
