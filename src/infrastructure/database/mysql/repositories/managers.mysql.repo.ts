import { Injectable, NotFoundException } from '@nestjs/common';
import { ManagerMysqlEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IManagersRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { ManagerDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Managers for mysql
 *
 * @export
 * @class ManagersMysqlRepository
 * @implements {IManagersRepository<ManagerMysqlEntity>}
 */
@Injectable()
export class ManagersMysqlRepository
  implements IManagersRepository<ManagerMysqlEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<ManagerMysqlEntity>
   */
  constructor(
    @InjectRepository(ManagerMysqlEntity)
    private readonly repository: Repository<ManagerMysqlEntity>,
  ) {}

  /**
   * It takes a ManagerDomainEntityBase, saves it to the database, and returns a ManagerMysqlEntity
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase
   * @returns An Observable of ManagerMysqlEntity
   */
  create(entity: ManagerDomainEntityBase): Observable<ManagerMysqlEntity> {
    return from(this.repository.save(entity)).pipe(
      map((value) => {
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It updates a manager in the database
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase
   * @returns Observable<ManagerMysqlEntity>
   */
  update(entity: ManagerDomainEntityBase): Observable<ManagerMysqlEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found manager with id: ${entity.id}`,
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
   * It returns an Observable of ManagerMysqlEntity[] (an array of ManagerMysqlEntity objects) that is
   * obtained by mapping the result of the find() function of the MysqlDB repository
   * @returns Observable<ManagerMysqlEntity[]>
   */
  findAll(): Observable<ManagerMysqlEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found managers`,
          });
        }
        return value.map((item) => {
          return item;
        });
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a manager by its id and returns it as an observable
   * @param {string} id - string - the id of the manager to find
   * @returns Observable<ManagerMysqlEntity>
   */
  findById(id: string): Observable<ManagerMysqlEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found manager with id: ${id}`,
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
   * It finds a manager by its email and returns it as an observable
   * @param {string} email - string - the email of the manager to find
   * @returns Observable<ManagerMysqlEntity>
   */
  findByEmail(email: string): Observable<ManagerMysqlEntity> {
    return from(this.repository.findOneBy({ email: email })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found manager with email: ${email}`,
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
