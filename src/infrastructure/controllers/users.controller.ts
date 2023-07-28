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
import { UsersService } from '../services';
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  FindAllUserUseCase,
  FindByDocumentUserUseCase,
  FindByIdUserUseCase,
  UpdateUserUseCase,
} from '../../application/use-cases';
import {
  CreateUserCommand,
  DeleteUserCommand,
  FindByDocumentUserCommand,
  FindByIdUserCommand,
  UpdateUserCommand,
} from '../commands';
import {
  CreateUserResponse,
  DeleteUserResponse,
  FindAllUserResponse,
  FindByDocumentUserResponse,
  FindByIdUserResponse,
  UpdateUserResponse,
} from '../responses';
import { IResponse } from '../../domain/interfaces';
import { UserDomainEntityBase } from '../../domain/entities';
@ApiTags('Users')
@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({ type: CreateUserResponse })
  @Post('/create')
  createUser(
    @Body() command: CreateUserCommand,
  ): Observable<IResponse<UserDomainEntityBase>> {
    const useCase = new CreateUserUseCase(this.usersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: UpdateUserResponse })
  @Patch('/update')
  updateUser(
    @Body() command: UpdateUserCommand,
  ): Observable<IResponse<UserDomainEntityBase>> {
    const useCase = new UpdateUserUseCase(this.usersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: DeleteUserResponse })
  @Delete('/delete')
  deleteUser(
    @Body() command: DeleteUserCommand,
  ): Observable<IResponse<boolean>> {
    const useCase = new DeleteUserUseCase(this.usersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByIdUserResponse })
  @Put('/findbyid')
  findUserById(
    @Body() command: FindByIdUserCommand,
  ): Observable<IResponse<UserDomainEntityBase>> {
    const useCase = new FindByIdUserUseCase(this.usersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByDocumentUserResponse })
  @Put('/findbydocument')
  findUserByDocument(
    @Body() command: FindByDocumentUserCommand,
  ): Observable<IResponse<UserDomainEntityBase>> {
    const useCase = new FindByDocumentUserUseCase(this.usersService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllUserResponse })
  @Get('/findall')
  findAllUser(): Observable<IResponse<UserDomainEntityBase[]>> {
    const useCase = new FindAllUserUseCase(this.usersService);
    return useCase.execute();
  }
}
