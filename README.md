```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# 生成新的模块
```bash
  nest g module cats
```

# 设置全局中间件的两种形式
```text
1.通过app.module.ts中做路由匹配设置，在这里设置全局中间件会限制路由的匹配设置中间件的功能
2.通过在main.ts中通过app讲全局中间件进行引入
```
```js
///方案一，app.module.ts
 configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GlobalMiddleware)/// .apply(UserMiddleware, NewsMiddleware, logger)多个中间件
      .forRoutes('*');////表示匹配所有的路由
      // .forRoutes({ path: 'news', method: RequestMethod.ALL }, { path: 'product', method: RequestMethod.ALL }); // 匹配多个路
  }
  ///方案二，main.ts
  app.use(appglobal);
```


# Injectable的理解就是新建公共方法
```js
import { Injectable } from '@nestjs/common';
@Injectable()
export class GetConfigService {
  // 公共服务的方法
  getConfig(data) {
    return data;
  }
}
```
"# nestjs-mysql-redis" 
