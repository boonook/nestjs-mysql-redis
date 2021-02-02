import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import {appglobal} from '@/middlewares/appglobal/appglobal.middleware'
import {GolbalauthGuard} from '@/utils/golbalguard/golbalauth.guard'
import {HttpExceptionFilter} from '@/utils/filter/http-exception.filter'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ///配置网络请求跨域
  app.enableCors();
  ///配置全局中间件,支持多个全局中间件
  app.use(appglobal);///app.use(appglobal,appglobal);
  ////配置全局路由守卫
  app.useGlobalGuards(new GolbalauthGuard());
  ///全局注册通用异常功率器
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
