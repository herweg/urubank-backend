import { Module } from '@nestjs/common';
import { MongoModule } from './database/mongodb/mongo.module';
import { Services } from './services';
import { Controllers } from './controllers';

@Module({
  imports: [MongoModule],
  controllers: [...Controllers],
  providers: [...Services],
})
export class AppModule {}
