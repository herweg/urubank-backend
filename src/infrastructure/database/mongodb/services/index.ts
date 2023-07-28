import { UsersMongoService } from './users.mongo.service';
import { FinanciersMongoService } from './financiers.mongo.service';
import { CampaignsMongoService } from './campaigns.mongo.service';
import { LeadsMongoService } from './leads.mongo.service';

export const ServicesMongo = [
  UsersMongoService,
  FinanciersMongoService,
  CampaignsMongoService,
  LeadsMongoService,
];

export * from './users.mongo.service';
export * from './financiers.mongo.service';
export * from './campaigns.mongo.service';
export * from './leads.mongo.service';
