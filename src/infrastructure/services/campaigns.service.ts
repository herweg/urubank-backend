import { Injectable } from '@nestjs/common';
import { CampaignsMongoService } from '../database/mongodb/services';

@Injectable()
export class CampaignsService extends CampaignsMongoService {}
