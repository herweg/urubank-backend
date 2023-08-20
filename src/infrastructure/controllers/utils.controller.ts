import * as fs from 'fs';
import { v4 as uuid } from 'uuid';
import { Controller, Post, Body, Put } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Observable, of } from 'rxjs';
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

  @Put('/images/save')
  saveImage(@Body('data') data): Observable<string> {
    return of(this.convertBase64ToSaveImage(data));
  }

  convertBase64ToSaveImage(base64: string): string {
    const buff = Buffer.from(base64, 'base64');
    const dir = './assets/images/';
    const name = uuid() + '.jpg';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(dir + name, buff);
    return name;
  }
}
