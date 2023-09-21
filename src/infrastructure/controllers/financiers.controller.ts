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
import { FinanciersService } from '../services';
import {
  CreateFinancierUseCase,
  DeleteFinancierUseCase,
  FindAllFinancierUseCase,
  FindByIdFinancierUseCase,
  UpdateFinancierUseCase,
} from '../../application/use-cases';
import {
  CreateFinancierCommand,
  DeleteFinancierCommand,
  FindByIdFinancierCommand,
  UpdateFinancierCommand,
} from '../commands';
import {
  CreateFinancierResponse,
  DeleteFinancierResponse,
  FindAllFinancierResponse,
  FindByIdFinancierResponse,
  UpdateFinancierResponse,
} from '../responses';
import { IResponse } from '../../domain/interfaces';
import { FinancierDomainEntityBase } from '../../domain/entities';
@ApiTags('Financiers')
@Controller('/financiers')
export class FinanciersController {
  constructor(private readonly financiersService: FinanciersService) {}

  @ApiResponse({ type: CreateFinancierResponse })
  @Post('/create')
  createFinancier(
    @Body() command: CreateFinancierCommand,
  ): Observable<IResponse<FinancierDomainEntityBase>> {
    const useCase = new CreateFinancierUseCase(this.financiersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: UpdateFinancierResponse })
  @Patch('/update')
  updateFinancier(
    @Body() command: UpdateFinancierCommand,
  ): Observable<IResponse<FinancierDomainEntityBase>> {
    const useCase = new UpdateFinancierUseCase(this.financiersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: DeleteFinancierResponse })
  @Delete('/delete')
  deleteFinancier(
    @Body() command: DeleteFinancierCommand,
  ): Observable<IResponse<boolean>> {
    const useCase = new DeleteFinancierUseCase(this.financiersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByIdFinancierResponse })
  @Put('/findbyid')
  findFinancierById(
    @Body() command: FindByIdFinancierCommand,
  ): Observable<IResponse<FinancierDomainEntityBase>> {
    const useCase = new FindByIdFinancierUseCase(this.financiersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllFinancierResponse })
  @Get('/findall')
  findAllFinancier(): Observable<IResponse<FinancierDomainEntityBase[]>> {
    const useCase = new FindAllFinancierUseCase(this.financiersService);
    return useCase.execute();
  }
}
