// @ts-ignore
import { Controller, Get, Logger } from '@nestjs/common';
const http = require('request');

@Controller('graphql')
export class GraphqlsController {
  @Get('list')
  async list(){
    http('http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0',(err,res,body)=>{
      if(err===null){
        let data = JSON.parse(body);
        if(data.error+''==='0'){
          let list = data.data||[];
        }
      }else{
        Logger.error('错误信息',err,'HttpExceptionFilter');
      }
    })
  }
}
