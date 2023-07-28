import { UserMongoEntity } from './user.mongo.entity';
import { FinancierMongoEntity } from './financier.mongo.entity';
import { CampaignMongoEntity } from './campaign.mongo.entity';
import { LeadMongoEntity } from './lead.mongo.entity';

export const EntitiesMongo = [
  UserMongoEntity,
  FinancierMongoEntity,
  CampaignMongoEntity,
  LeadMongoEntity,
];

export * from './user.mongo.entity';
export * from './financier.mongo.entity';
export * from './campaign.mongo.entity';
export * from './lead.mongo.entity';
