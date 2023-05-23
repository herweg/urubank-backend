import { Module } from '@nestjs/common';
import { MysqlModule } from './database/mysql/mysql.module';
import { ClientsService } from './services/clients.service';

@Module({
  imports: [MysqlModule],
  controllers: [],
  providers: [ClientsService],
})
export class AppModule {}
