import { Injectable } from '@nestjs/common';
import { FinanciersMongoService } from '../database/mongodb/services';

@Injectable()
export class FinanciersService extends FinanciersMongoService {}
