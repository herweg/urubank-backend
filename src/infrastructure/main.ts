import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  dotenv.config({ path: 'environments/.env.' + process.env.NODE_ENV });
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useBodyParser('json', { limit: '10mb' });
  app.useStaticAssets(join(__dirname, '..', 'assets/images'), {
    prefix: '/assets/images/',
  });
  app.enableCors({
    origin: ['https://urubank.going.uy'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

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
