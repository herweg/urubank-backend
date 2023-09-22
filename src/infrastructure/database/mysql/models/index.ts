import { UserMysqlEntity } from './user.mysql.entity';
import { FinancierMysqlEntity } from './financer.mysql.entity';
import { CampaignMysqlEntity } from './campaign.mysql.entity';
import { LeadMysqlEntity } from './lead.mysql.entity';
import { ManagerMysqlEntity } from './manager.mysql.entity';

export const EntitiesMysql = [
  UserMysqlEntity,
  FinancierMysqlEntity,
  CampaignMysqlEntity,
  LeadMysqlEntity,
  ManagerMysqlEntity,
];

export * from './user.mysql.entity';
export * from './financer.mysql.entity';
export * from './campaign.mysql.entity';
export * from './lead.mysql.entity';
export * from './manager.mysql.entity';
