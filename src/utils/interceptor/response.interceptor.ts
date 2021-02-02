/**
 * 响应拦截器
 * **/
import { Injectable, NestInterceptor,ExecutionContext,CallHandler } from '@nestjs/common';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
///返回的结构体
interface Response {
  data:{}
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor{
  intercept(
    context:ExecutionContext,
    next:CallHandler,
  ):Observable<Response>{
    console.log('进入全局响应拦截器');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    return  next.handle().pipe(
      map(data=>{
        return{
          statusCode:200,
          timeStamp:new Date().toISOString(),
          path:request.url,
          message:'操作成功',
          data:data
        }
      })
    )
  }
}
