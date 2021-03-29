// @ts-ignore
import { Module,MiddlewareConsumer } from '@nestjs/common';
import * as path from 'path';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RedisModule} from 'nestjs-redis';
import { ConfigModule } from 'nestjs-config';
import {NestMysql2Module} from 'mysql2-nestjs'
import { ArticleModule } from '@views/article/article.module';
import { GlobalMiddleware } from '@/middlewares/global/global.middleware';
import { ErrorsInterceptor } from '@/middlewares/error/errors.interceptor';
import { CatsModule } from '@views/cats/cats.module';
import { UserModule } from '@views/user/user.module';
import { GraphqlsModule } from '@/views/graphql/graphqls.module';
import { HttprequestModule } from '@/views/httprequest/httprequest.module';
import { ZhuangshiqiModule } from '@/views/zhuangshiqi/zhuangshiqi.module';
import {Ways} from '@/utils/ways'
const config = require('./config/database.config');
const tools = require('./utils/tools');
const env = process.env.NODE_ENV;
const appConfig = config.default[env+''==='development'?'dev':'pro'];
let options={
  port:appConfig.redis.port,
  host:appConfig.redis.host,
  password:appConfig.redis.password,
  db:appConfig.redis.db,
};
tools.printLog();
Ways.startServer();

@Module({
  ////注入module
  imports: [
    // 配置加载配置文件
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      modifyConfigName: name => name.replace('.config', ''),
    }),
    NestMysql2Module.register({
      host:appConfig.sql.host,
      port:appConfig.sql.port,
      user:appConfig.sql.user,
      password:appConfig.sql.password,
      database:appConfig.sql.database,
    }),
    ArticleModule,
    CatsModule,
    UserModule,
    RedisModule.register(options),
    GraphqlsModule,
    HttprequestModule,
    ZhuangshiqiModule
  ],
  ///注入controllers
  controllers:[],
  ///注入service
  providers: [
    {
      provide: APP_INTERCEPTOR,   // 全局拦截器，这里使用全局异常拦截器改写异常消息结构
      useClass: ErrorsInterceptor
    },
  ],
  exports: []
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GlobalMiddleware)/// .apply(UserMiddleware, NewsMiddleware, logger)多个中间件
      .forRoutes('*');////表示匹配所有的路由
      // .forRoutes({ path: 'news', method: RequestMethod.ALL }, { path: 'product', method: RequestMethod.ALL }); // 匹配多个路
  }
}
