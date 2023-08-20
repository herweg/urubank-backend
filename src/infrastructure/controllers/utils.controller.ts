import { Controller, Post, Body, Put } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { IResponse } from '../../domain/interfaces';
import { SumecDomainEntityBase } from '../../domain/entities';
import {
  SaveImageUtilsUseCase,
  GetDuesForCapitalSumecUseCase,
  GetPreApprovedSumecUseCase,
} from '../../application/use-cases';
import {
  SaveImageUtilsCommand,
  GetDuesForCapitalSumecCommand,
  GetPreApprovedSumecCommand,
} from '../commands';
import {
  SaveImageUtilsResponse,
  GetDuesForCapitalSumecResponse,
  GetPreApprovedSumecResponse,
} from '../responses';
import { UtilsService, SumecService } from '../services';

@ApiTags('Utils')
@Controller('/utils')
export class UtilsController {
  constructor(
    private readonly utilsService: UtilsService,
    private readonly sumecService: SumecService,
  ) {}

  @ApiResponse({ type: GetDuesForCapitalSumecResponse })
  @Post('/sumec/getduesforcapital')
  getDuesForCapital(
    @Body() command: GetDuesForCapitalSumecCommand,
  ): Observable<IResponse<SumecDomainEntityBase>> {
    const useCase = new GetDuesForCapitalSumecUseCase(this.sumecService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: GetPreApprovedSumecResponse })
  @Post('/sumec/getpreapproved')
  getPreApproved(
    @Body() command: GetPreApprovedSumecCommand,
  ): Observable<IResponse<SumecDomainEntityBase>> {
    const useCase = new GetPreApprovedSumecUseCase(this.sumecService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: SaveImageUtilsResponse })
  @Put('/images/save')
  saveImage(
    @Body() command: SaveImageUtilsCommand,
  ): Observable<IResponse<string>> {
    const useCase = new SaveImageUtilsUseCase(this.utilsService);
    return useCase.execute(command);
  }
}
