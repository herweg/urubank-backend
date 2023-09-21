import { UsersMongoRepository } from './users.mongo.repo';
import { FinanciersMongoRepository } from './financiers.mongo.repo';
import { CampaignsMongoRepository } from './campaigns.mongo.repo';
import { LeadsMongoRepository } from './leads.mongo.repo';
import { ManagersMongoRepository } from './managers.mongo.repo';

export const RepositoriesMongo = [
  UsersMongoRepository,
  FinanciersMongoRepository,
  CampaignsMongoRepository,
  LeadsMongoRepository,
  ManagersMongoRepository,
];

export * from './users.mongo.repo';
export * from './financiers.mongo.repo';
export * from './campaigns.mongo.repo';
export * from './leads.mongo.repo';
export * from './managers.mongo.repo';
