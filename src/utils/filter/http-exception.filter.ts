import { Catch, ExceptionFilter, HttpException, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import {Request,Response} from 'express'
@Catch()
export class HttpExceptionFilter implements ExceptionFilter{
  catch(exception: HttpException, host:ArgumentsHost){
    console.log('进入了全局异常过滤器');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof  HttpException
    ?exception.getStatus():HttpStatus.INTERNAL_SERVER_ERROR;
    //抛出错误信息
    const message = exception.message||exception.message['message']||exception.message['error']||null;
    let msgLog = {
      statusCode:status,
      timestamp:new Date().toISOString(),
      path:request.url,
      message:'请求失败',
      data:message
    };
    Logger.error('错误信息',JSON.stringify(msgLog),'HttpExceptionFilter');
    response.status(status).json(msgLog);
  }
}
