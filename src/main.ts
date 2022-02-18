import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  Logger.error('SERVER_PORT2');
  console.log('SERVER_PORT', process.env.SERVER_PORT);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
