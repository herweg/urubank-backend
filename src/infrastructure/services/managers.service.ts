import { Injectable } from '@nestjs/common';
import { ManagersMongoService } from '../database/mongodb/services';

@Injectable()
export class ManagersService extends ManagersMongoService {}
