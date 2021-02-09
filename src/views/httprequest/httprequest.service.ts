import { Injectable,Logger } from '@nestjs/common';
const http = require('request');
// @ts-ignore
@Injectable()
export class HttprequestService {
  list(){
    return new Promise(function(resolve, reject){
      http('http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0',(err,res,body)=>{
        if(err===null){
          let data = JSON.parse(body);
          if(data.error+''==='0'){
            let list= data.data||[];
            resolve(list);
          }
        }else{
          Logger.error('错误信息',err,'HttpExceptionFilter');
        }
      })
    })
  }
}
