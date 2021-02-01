import { Module,MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ArticleModule } from '@views/article/article.module';
import { GlobalMiddleware } from '@/middlewares/global/global.middleware';
import { ErrorsInterceptor } from '@/middlewares/error/errors.interceptor';
import { CatsModule } from '@views/cats/cats.module';
@Module({
  ////注入module
  imports: [
    ArticleModule,
    CatsModule,
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
