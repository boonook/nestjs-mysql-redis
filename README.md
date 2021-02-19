```bash
$ npm install
```
eg：![效果](https://raw.githubusercontent.com/boonook/nestjs-mysql-redis/main/src/public/2020011414381332.png)
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
# 生成路由守卫
```bash
nest g guard golbalguard/auth
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
#  @HttpCode(200) 修改请求成功之后返回的状态码

# 路由守卫一种是局部的路由守卫，一种是全局的路由守卫，路由守卫针对的是做权限校验例子见（src/utils/guard以及src/utils/golbalguard）

# filter 异常捕获过滤器在main.ts中进行注入
```text

```

# 对redis的配置使用（nestjs-redis）

```text
1.在app.module.ts中注入redis的配置文件
2.对redis方法进行封装可查看utils下的redisModal
3.使用时需先在对应的文件的moduls文件里的providers中进行注入
4.在使用时直接在controller或者service中引入使用即可具体可参考views/cats
```

# 对mysql的配置使用（mysql2-nestjs）

```text
1.在app.module.ts中注入mysql的配置文件
2.在需要使用的位置的controller引入@InjectMysql()
                           private readonly mysql: Mysql
3.const [result, fields] = await this.mysql.query("SELECT * from user");直接使用                           
```

# 定义接口文档（http://localhost:3000/api/）具体可参考cats文件

# 使用request模块请求第三方服务接口具体可参考httprequest文件

# graphql目录测试api查询工具的使用

# process.env.NODE_ENV通过这种形式可以区分开发环境（development）与生产环境（production）

# 通过就访问服务器中的静态资源文件具体可参考app.module.ts文件

# nestjs通过fs模块读取静态资源文件
