import {
  Controller,
  Body,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ManagersService } from '../services';
import {
  CreateManagerUseCase,
  DeleteManagerUseCase,
  FindAllManagerUseCase,
  FindByIdManagerUseCase,
  FindByEmailManagerUseCase,
  UpdateManagerUseCase,
} from '../../application/use-cases';
import {
  CreateManagerCommand,
  DeleteManagerCommand,
  FindAllManagerCommand,
  FindByIdManagerCommand,
  FindByEmailManagerCommand,
  UpdateManagerCommand,
} from '../commands';
import {
  CreateManagerResponse,
  DeleteManagerResponse,
  FindAllManagerResponse,
  FindByIdManagerResponse,
  FindByEmailManagerResponse,
  UpdateManagerResponse,
} from '../responses';
import { IResponse } from '../../domain/interfaces';
import { ManagerDomainEntityBase } from '../../domain/entities';
@ApiTags('Managers')
@Controller('/managers')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @ApiResponse({ type: CreateManagerResponse })
  @Post('/create')
  createManager(
    @Body() command: CreateManagerCommand,
  ): Observable<IResponse<ManagerDomainEntityBase>> {
    const useCase = new CreateManagerUseCase(this.managersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: UpdateManagerResponse })
  @Patch('/update')
  updateManager(
    @Body() command: UpdateManagerCommand,
  ): Observable<IResponse<ManagerDomainEntityBase>> {
    const useCase = new UpdateManagerUseCase(this.managersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: DeleteManagerResponse })
  @Delete('/delete')
  deleteManager(
    @Body() command: DeleteManagerCommand,
  ): Observable<IResponse<boolean>> {
    const useCase = new DeleteManagerUseCase(this.managersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByIdManagerResponse })
  @Put('/findbyid')
  findManagerById(
    @Body() command: FindByIdManagerCommand,
  ): Observable<IResponse<ManagerDomainEntityBase>> {
    const useCase = new FindByIdManagerUseCase(this.managersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllManagerResponse })
  @Get('/findall')
  findAllManager(
    @Query() command?: FindAllManagerCommand,
  ): Observable<IResponse<ManagerDomainEntityBase[]>> {
    const useCase = new FindAllManagerUseCase(this.managersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByEmailManagerResponse })
  @Get('/findbyemail')
  findByEmail(
    @Query() command?: FindByEmailManagerCommand,
  ): Observable<IResponse<ManagerDomainEntityBase>> {
    const useCase = new FindByEmailManagerUseCase(this.managersService);
    return useCase.execute(command);
  }

  @Get('/findaccount')
  findByAccount(@Req() req: Request) {
    return req.headers;
  }
}
