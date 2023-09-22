import { UsersController } from './users.controller';
import { FinanciersController } from './financiers.controller';
import { CampaignsController } from './campaigns.controller';
import { LeadsController } from './leads.controller';
import { UtilsController } from './utils.controller';
import { ManagersController } from './managers.controller';

export const Controllers = [
  UsersController,
  FinanciersController,
  CampaignsController,
  LeadsController,
  UtilsController,
  ManagersController,
];

export * from './users.controller';
export * from './financiers.controller';
export * from './campaigns.controller';
export * from './leads.controller';
export * from './utils.controller';
export * from './managers.controller';
