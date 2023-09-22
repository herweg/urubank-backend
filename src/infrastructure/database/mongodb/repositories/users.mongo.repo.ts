import { Injectable, NotFoundException } from '@nestjs/common';
import { UserMongoEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUsersRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { UserDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Users for mongo
 *
 * @export
 * @class UsersMongoRepository
 * @implements {IUsersRepository<UserMongoEntity>}
 */
@Injectable()
export class UsersMongoRepository implements IUsersRepository<UserMongoEntity> {
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<UserMongoEntity>
   */
  constructor(
    @InjectRepository(UserMongoEntity)
    private readonly repository: Repository<UserMongoEntity>,
  ) {}

  /**
   * It takes a UserDomainEntityBase, saves it to the database, and returns a UserMongoEntity
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase
   * @returns An Observable of UserMongoEntity
   */
  create(entity: UserDomainEntityBase): Observable<UserMongoEntity> {
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
   * It updates a user in the database
   * @param {UserDomainEntityBase} entity - UserDomainEntityBase
   * @returns Observable<UserMongoEntity>
   */
  update(entity: UserDomainEntityBase): Observable<UserMongoEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found user with id: ${entity.id}`,
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
   * It returns an Observable of UserMongoEntity[] (an array of UserMongoEntity objects) that is
   * obtained by mapping the result of the find() function of the MongoDB repository
   * @returns Observable<UserMongoEntity[]>
   */
  findAll(): Observable<UserMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found users`,
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
   * It finds a user by its id and returns it as an observable
   * @param {string} id - string - the id of the user to find
   * @returns Observable<UserMongoEntity>
   */
  findById(id: string): Observable<UserMongoEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found user with id: ${id}`,
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
   * It finds a user by its document and returns it as an observable
   * @param {string} document - string - the document of the user to find
   * @returns Observable<UserMongoEntity>
   */
  findByDocument(document: string): Observable<UserMongoEntity> {
    return from(this.repository.findOneBy({ document: document })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException({
            success: false,
            message: `Error: not found user with document: ${document}`,
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
