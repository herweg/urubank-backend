import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongoModule } from './database/mongodb/mongo.module';
import { Services } from './services';
import { Controllers } from './controllers';

@Module({
  imports: [MongoModule, HttpModule],
  controllers: [...Controllers],
  providers: [...Services],
})
export class AppModule {}
