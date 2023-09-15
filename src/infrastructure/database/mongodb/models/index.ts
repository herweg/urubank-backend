import { UserMongoEntity } from './user.mongo.entity';
import { FinancierMongoEntity } from './financier.mongo.entity';
import { CampaignMongoEntity } from './campaign.mongo.entity';
import { LeadMongoEntity } from './lead.mongo.entity';
import { ManagerMongoEntity } from './manager.mongo.entity';

export const EntitiesMongo = [
  UserMongoEntity,
  FinancierMongoEntity,
  CampaignMongoEntity,
  LeadMongoEntity,
  ManagerMongoEntity,
];

export * from './user.mongo.entity';
export * from './financier.mongo.entity';
export * from './campaign.mongo.entity';
export * from './lead.mongo.entity';
export * from './manager.mongo.entity';
