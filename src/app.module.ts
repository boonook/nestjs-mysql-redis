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
import {GraphQLModule} from '@nestjs/graphql'
import { HttprequestModule } from '@/views/httprequest/httprequest.module';

let options={
  port: 6379,
  host: '127.0.0.1',
  password: '',
  db: 0
};

@Module({
  ////注入module
  imports: [
    // 配置加载配置文件
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      modifyConfigName: name => name.replace('.config', ''),
    }),
    NestMysql2Module.register({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "1234",
      database: 'zhdj',
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true
    }),
    ArticleModule,
    CatsModule,
    UserModule,
    RedisModule.register(options),
    GraphqlsModule,
    HttprequestModule
  ],
  ///注入controllers
  controllers:[],
  ///注入service
  providers: [
    {
      provide: APP_INTERCEPTOR,   // 全局拦截器，这里使用全局异常拦截器改写异常消息结构
      useClass: ErrorsInterceptor
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GlobalMiddleware)/// .apply(UserMiddleware, NewsMiddleware, logger)多个中间件
      .forRoutes('*');////表示匹配所有的路由
      // .forRoutes({ path: 'news', method: RequestMethod.ALL }, { path: 'product', method: RequestMethod.ALL }); // 匹配多个路
  }
}
