import { UsersController } from './users.controller';
import { FinanciersController } from './financiers.controller';
import { CampaignsController } from './campaigns.controller';
import { LeadsController } from './leads.controller';

export const Controllers = [
  UsersController,
  FinanciersController,
  CampaignsController,
  LeadsController,
];

export * from './users.controller';
export * from './financiers.controller';
export * from './campaigns.controller';
export * from './leads.controller';
