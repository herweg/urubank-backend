import { Injectable } from '@nestjs/common';
import { ClientsMysqlService } from '../database/mysql/services';

@Injectable()
export class ClientsService extends ClientsMysqlService {}
