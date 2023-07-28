import {
  Controller,
  Body,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CampaignsService } from '../services';
import {
  CreateCampaignUseCase,
  DeleteCampaignUseCase,
  FindAllCampaignUseCase,
  FindByIdCampaignUseCase,
  UpdateCampaignUseCase,
} from '../../application/use-cases';
import {
  CreateCampaignCommand,
  DeleteCampaignCommand,
  FindByIdCampaignCommand,
  UpdateCampaignCommand,
} from '../commands';
import {
  CreateCampaignResponse,
  DeleteCampaignResponse,
  FindAllCampaignResponse,
  FindByIdCampaignResponse,
  UpdateCampaignResponse,
} from '../responses';
import { IResponse } from '../../domain/interfaces';
import { CampaignDomainEntityBase } from '../../domain/entities';
@ApiTags('Campaigns')
@Controller('/campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @ApiResponse({ type: CreateCampaignResponse })
  @Post('/create')
  createCampaign(
    @Body() command: CreateCampaignCommand,
  ): Observable<IResponse<CampaignDomainEntityBase>> {
    const useCase = new CreateCampaignUseCase(this.campaignsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: UpdateCampaignResponse })
  @Patch('/update')
  updateCampaign(
    @Body() command: UpdateCampaignCommand,
  ): Observable<IResponse<CampaignDomainEntityBase>> {
    const useCase = new UpdateCampaignUseCase(this.campaignsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: DeleteCampaignResponse })
  @Delete('/delete')
  deleteCampaign(
    @Body() command: DeleteCampaignCommand,
  ): Observable<IResponse<boolean>> {
    const useCase = new DeleteCampaignUseCase(this.campaignsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByIdCampaignResponse })
  @Put('/findbyid')
  findCampaignById(
    @Body() command: FindByIdCampaignCommand,
  ): Observable<IResponse<CampaignDomainEntityBase>> {
    const useCase = new FindByIdCampaignUseCase(this.campaignsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllCampaignResponse })
  @Get('/findall')
  findAllCampaign(): Observable<IResponse<CampaignDomainEntityBase[]>> {
    const useCase = new FindAllCampaignUseCase(this.campaignsService);
    return useCase.execute();
  }
}
