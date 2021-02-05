import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from '@/app.module';
import {appglobal} from '@/middlewares/appglobal/appglobal.middleware'
import {GolbalauthGuard} from '@/utils/golbalguard/golbalauth.guard'
import {HttpExceptionFilter} from '@/utils/filter/http-exception.filter'
import {ResponseInterceptor} from '@/utils/interceptor/response.interceptor'
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
  ////全局响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());
  const PORT = process.env.PORT || 8080;
  await app.listen(PORT,() => {
    Logger.log(`服务已经启动,请访问:http://localhost:${PORT}`);
  });
}
bootstrap();
