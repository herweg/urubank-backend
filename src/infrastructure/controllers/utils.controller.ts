import * as rawbody from 'raw-body';
import { Controller, Post, Body, Req } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiProduces,
  ApiConsumes,
} from '@nestjs/swagger';
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

  @ApiConsumes('text/plain')
  @ApiProduces('text/plain')
  @Post('/logger')
  async logger(@Body() data, @Req() req): Promise<string> {
    if (req.readable) {
      const raw = await rawbody(req);
      const text = raw.toString().trim();
      return text;
    } else {
      return data;
    }
  }
}
