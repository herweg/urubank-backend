import { Injectable, NotFoundException } from '@nestjs/common';
import { ManagerMongoEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IManagersRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { ManagerDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Managers for mongo
 *
 * @export
 * @class ManagersMongoRepository
 * @implements {IManagersRepository<ManagerMongoEntity>}
 */
@Injectable()
export class ManagersMongoRepository
  implements IManagersRepository<ManagerMongoEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<ManagerMongoEntity>
   */
  constructor(
    @InjectRepository(ManagerMongoEntity)
    private readonly repository: Repository<ManagerMongoEntity>,
  ) {}

  /**
   * It takes a ManagerDomainEntityBase, saves it to the database, and returns a ManagerMongoEntity
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase
   * @returns An Observable of ManagerMongoEntity
   */
  create(entity: ManagerDomainEntityBase): Observable<ManagerMongoEntity> {
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
   * It updates a manager in the database
   * @param {ManagerDomainEntityBase} entity - ManagerDomainEntityBase
   * @returns Observable<ManagerMongoEntity>
   */
  update(entity: ManagerDomainEntityBase): Observable<ManagerMongoEntity> {
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
   * It returns an Observable of ManagerMongoEntity[] (an array of ManagerMongoEntity objects) that is
   * obtained by mapping the result of the find() function of the MongoDB repository
   * @returns Observable<ManagerMongoEntity[]>
   */
  findAll(): Observable<ManagerMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found managers`,
          });
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
   * It finds a manager by its id and returns it as an observable
   * @param {string} id - string - the id of the manager to find
   * @returns Observable<ManagerMongoEntity>
   */
  findById(id: string): Observable<ManagerMongoEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found manager with id: ${id}`,
          });
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
   * It finds a manager by its email and returns it as an observable
   * @param {string} email - string - the email of the manager to find
   * @returns Observable<ManagerMongoEntity>
   */
  findByEmail(email: string): Observable<ManagerMongoEntity> {
    return from(this.repository.findOneBy({ email: email })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found manager with email: ${email}`,
          });
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
