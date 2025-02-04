import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { listeners } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    listeners: '*'
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
