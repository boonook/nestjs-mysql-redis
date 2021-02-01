import { Catch, ExceptionFilter, HttpException,ArgumentsHost } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter{
  catch(exception: HttpException, host:ArgumentsHost){
    console.log('进入了全局异常过滤器');
  }
}
