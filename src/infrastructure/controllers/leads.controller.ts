import {
  Controller,
  Body,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { LeadsService } from '../services';
import {
  CreateLeadUseCase,
  DeleteLeadUseCase,
  FindAllLeadUseCase,
  FindByIdLeadUseCase,
  FindActiveLeadsByUserIdLeadUseCase,
  FindAllByFinancierIdLeadUseCase,
  UpdateLeadUseCase,
} from '../../application/use-cases';
import {
  CreateLeadCommand,
  DeleteLeadCommand,
  FindAllLeadCommand,
  FindByIdLeadCommand,
  FindActiveLeadsByUserIdLeadCommand,
  FindAllByFinancierIdLeadCommand,
  UpdateLeadCommand,
} from '../commands';
import {
  CreateLeadResponse,
  DeleteLeadResponse,
  FindAllLeadResponse,
  FindByIdLeadResponse,
  FindActiveLeadsByUserIdResponse,
  FindAllByFinancierIdLeadResponse,
  UpdateLeadResponse,
} from '../responses';
import { IResponse } from '../../domain/interfaces';
import { LeadDomainEntityBase } from '../../domain/entities';
@ApiTags('Leads')
@Controller('/leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @ApiResponse({ type: CreateLeadResponse })
  @Post('/create')
  createLead(
    @Body() command: CreateLeadCommand,
  ): Observable<IResponse<LeadDomainEntityBase>> {
    const useCase = new CreateLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: UpdateLeadResponse })
  @Patch('/update')
  updateLead(
    @Body() command: UpdateLeadCommand,
  ): Observable<IResponse<LeadDomainEntityBase>> {
    const useCase = new UpdateLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: DeleteLeadResponse })
  @Delete('/delete')
  deleteLead(
    @Body() command: DeleteLeadCommand,
  ): Observable<IResponse<boolean>> {
    const useCase = new DeleteLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByIdLeadResponse })
  @Put('/findbyid')
  findLeadById(
    @Body() command: FindByIdLeadCommand,
  ): Observable<IResponse<LeadDomainEntityBase>> {
    const useCase = new FindByIdLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindActiveLeadsByUserIdResponse })
  @Put('/findactiveleadsbyuserid')
  findActiveLeadsByUserId(
    @Body() command: FindActiveLeadsByUserIdLeadCommand,
  ): Observable<IResponse<LeadDomainEntityBase[]>> {
    const useCase = new FindActiveLeadsByUserIdLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllByFinancierIdLeadResponse })
  @Put('/findallbyfinancierid')
  findAllByFinancierId(
    @Body() command: FindAllByFinancierIdLeadCommand,
  ): Observable<IResponse<LeadDomainEntityBase[]>> {
    const useCase = new FindAllByFinancierIdLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllLeadResponse })
  @Get('/findall')
  findAllLead(
    @Query() command?: FindAllLeadCommand,
  ): Observable<IResponse<LeadDomainEntityBase[]>> {
    const useCase = new FindAllLeadUseCase(this.leadsService);
    return useCase.execute(command);
  }
}
