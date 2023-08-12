import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { IResponse } from 'src/domain/interfaces';
import { SumecDomainEntityBase } from '../../domain/entities';
import {
  GetDuesForCapitalSumecUseCase,
  GetPreApprovedSumecUseCase,
} from '../../application/use-cases';
import {
  GetDuesForCapitalSumecCommand,
  GetPreApprovedSumecCommand,
} from '../commands';
import {
  GetDuesForCapitalSumecResponse,
  GetPreApprovedSumecResponse,
} from '../responses';
import { SumecService } from '../services';

@ApiTags('Utils')
@Controller('/utils')
export class UtilsController {
  constructor(private readonly sumecService: SumecService) {}

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
}
