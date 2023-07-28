import { Injectable } from '@nestjs/common';
import { LeadsMongoService } from '../database/mongodb/services';

@Injectable()
export class LeadsService extends LeadsMongoService {}
