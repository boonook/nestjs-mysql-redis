import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from '@/app.module';
import {appglobal} from '@/middlewares/appglobal/appglobal.middleware'
import {GolbalauthGuard} from '@/utils/golbalguard/golbalauth.guard'
import {HttpExceptionFilter} from '@/utils/filter/http-exception.filter'
import {ResponseInterceptor} from '@/utils/interceptor/response.interceptor'
import {MyLogger} from '@/utils/myLogger/myLogger'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import {NestExpressApplication} from '@nestjs/platform-express'
const config = require('./config/database.config');
const env = process.env.NODE_ENV;
const appConfig = config.default[env+''==='development'?'dev':'pro'];

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{logger: new MyLogger(),});
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
  // app.useStaticAssets(join(__dirname, '../src', 'public'),{
  //   prefix: '/static/', ///设置虚拟路径
  // }); //http://localhost:3003/static/xxx.txt
  app.useStaticAssets(join(__dirname, '..', 'public'),{
    prefix: '/static/', ///设置虚拟路径
  }); //http://localhost:3003/static/xxx.txt
  const PORT = appConfig.PORT || 8080;
  /**
   * 自定义接口文档starty
   * **/
  const config = new DocumentBuilder()
    .setTitle('nestjs+mysql+redis')
    .setDescription('深圳市活力天汇科技股份有限公司')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /**** 消息通知，给客户端发送消息，接收来自客户端啊送过来的消息---------------------------------start* **/
  const webSocketServer_2 = require('ws').Server;
  const wss_2 = new webSocketServer_2({
    port:'3007'
  });
  wss_2.on('connection',function(ws) {
    try {
      ///给客户端发送消息
      ws.send('来自服务端的消息');
      Logger.log('服务器连接建立成功');
      ///接口客户端发送过来的消息
      ws.on('message',function(msg) {
        Logger.log('接收来自客户端的消息：'+msg);
        ws.send('来自客户端的消息'+msg)
      })
    }catch(e){
      Logger.warn('服务器连接建立失败，'+e)
    }
  });
  /**** 消息通知，给客户端发送消息，接收来自客户端啊送过来的消息---------------------------------end* **/
  /**
   * 自定义接口文档start
   * **/
  await app.listen(PORT,() => {
    Logger.log(`服务已经启动,请访问:http://localhost:${PORT}`);
  });
}
bootstrap();
