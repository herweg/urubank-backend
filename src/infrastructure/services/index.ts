import { UsersService } from './users.service';
import { FinanciersService } from './financiers.service';
import { CampaignsService } from './campaigns.service';
import { LeadsService } from './leads.service';
import { UtilsService } from './utils.service';
import { SumecService } from './sumec.service';

export const Services = [
  UsersService,
  FinanciersService,
  CampaignsService,
  LeadsService,
  UtilsService,
  SumecService,
];

export * from './users.service';
export * from './financiers.service';
export * from './campaigns.service';
export * from './leads.service';
export * from './utils.service';
export * from './sumec.service';
