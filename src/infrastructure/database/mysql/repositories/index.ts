import { UsersMysqlRepository } from './users.mysql.repo';
import { FinanciersMysqlRepository } from './financiers.mysql.repo';
import { CampaignsMysqlRepository } from './campaigns.mysql.repo';
import { LeadsMysqlRepository } from './leads.mysql.repo';
import { ManagersMysqlRepository } from './managers.mysql.repo';

export const RepositoriesMysql = [
  UsersMysqlRepository,
  FinanciersMysqlRepository,
  CampaignsMysqlRepository,
  LeadsMysqlRepository,
  ManagersMysqlRepository,
];

export * from './users.mysql.repo';
export * from './financiers.mysql.repo';
export * from './campaigns.mysql.repo';
export * from './leads.mysql.repo';
export * from './managers.mysql.repo';
