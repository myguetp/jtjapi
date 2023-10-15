import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Api documentation')
    .setDescription('The API description jyj conjuntos')
    .setVersion('1.0')
    .addTag('sales')
    .addTag('leases')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
