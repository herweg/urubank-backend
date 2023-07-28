import { Injectable } from '@nestjs/common';
import { UsersMongoService } from '../database/mongodb/services';

@Injectable()
export class UsersService extends UsersMongoService {}
