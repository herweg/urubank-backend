import { Injectable, NotFoundException } from '@nestjs/common';
import { UserMysqlEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUsersRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { UserDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Users for mysql
 *
 * @export
 * @class UsersMysqlRepository
 * @implements {IUsersRepository<UserMysqlEntity>}
 */
@Injectable()
export class UsersMysqlRepository implements IUsersRepository<UserMysqlEntity> {
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<UserMysqlEntity>
   */
  constructor(
    @InjectRepository(UserMysqlEntity)
    private readonly repository: Repository<UserMysqlEntity>,
  ) {}

  /**
   * It takes a UserDomainEntityBase, saves it to the database, and returns a UserMysqlEntity
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase
   * @returns An Observable of UserMysqlEntity
   */
  create(entity: UserDomainEntityBase): Observable<UserMysqlEntity> {
    return from(this.repository.save(entity)).pipe(
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It updates a user in the database
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase
   * @returns Observable<UserMysqlEntity>
   */
  update(entity: UserDomainEntityBase): Observable<UserMysqlEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found user with id: ${entity.id}`,
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
   * It returns an Observable of UserMysqlEntity[] (an array of UserMysqlEntity objects) that is
   * obtained by mapping the result of the find() function of the MysqlDB repository
   * @returns Observable<UserMysqlEntity[]>
   */
  findAll(): Observable<UserMysqlEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found users`);
        }
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a user by its id and returns it as an observable
   * @param {string} id - string - the id of the user to find
   * @returns Observable<UserMysqlEntity>
   */
  findById(id: string): Observable<UserMysqlEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(`Error: not found user with id: ${id}`);
        }
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a user by its document and returns it as an observable
   * @param {string} document - string - the document of the user to find
   * @returns Observable<UserMysqlEntity>
   */
  findByDocument(document: string): Observable<UserMysqlEntity> {
    return from(this.repository.findOneBy({ document: document })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found user with document: ${document}`,
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
