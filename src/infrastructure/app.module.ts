import { Module } from '@nestjs/common';
import { MysqlModule } from './database/mysql/mysql.module';
import { ClientsService } from './services';
import { ClientsController } from './controllers';

@Module({
  imports: [MysqlModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
