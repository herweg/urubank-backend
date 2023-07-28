import { UsersMysqlService } from './users.mysql.service';
import { FinanciersMysqlService } from './financiers.mysql.service';
import { CampaignsMysqlService } from './campaigns.mysql.service';
import { LeadsMysqlService } from './leads.mysql.service';

export const ServicesMysql = [
  UsersMysqlService,
  FinanciersMysqlService,
  CampaignsMysqlService,
  LeadsMysqlService,
];

export * from './users.mysql.service';
export * from './financiers.mysql.service';
export * from './campaigns.mysql.service';
export * from './leads.mysql.service';
