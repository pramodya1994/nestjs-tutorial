import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // start server, app awaits inbound http requests
  await app.listen(3000);
}
bootstrap();
