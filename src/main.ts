import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import {appglobal} from '@/middlewares/appglobal/appglobal.middleware'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(appglobal);
  await app.listen(3000);
}
bootstrap();
