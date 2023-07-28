import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { from } from 'rxjs';
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config({ path: 'environments/.env.' + process.env.NODE_ENV });
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swagger = new DocumentBuilder()
    .setTitle('Urubank API')
    .setDescription('Service to manage users, financiers, campaigns and leads')
    .setVersion('1')
    .build();

  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
  await app.listen(80);
}
from(bootstrap()).subscribe();
