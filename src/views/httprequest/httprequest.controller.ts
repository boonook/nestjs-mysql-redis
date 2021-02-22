import { Controller, Get,Logger } from '@nestjs/common';
import {HttprequestService} from './httprequest.service'
import { join } from 'path';
import {readFile,readFileSync} from 'fs'
@Controller('httprequest')
export class HttprequestController {
  constructor(
    private readonly httprequestService: HttprequestService,
  ) {}
  @Get('list')
  async list(){
    let data = await this.httprequestService.list();
    return {code:200, message: '查询成功', data:data };
  }

  @Get('file')
  async file(){
    let data = readFileSync('./public/json/city.json');
    return {code:200, message: '查询成功', data:data.toString()};
  }

  @Get('wsInfo')
  async wsInfo(){

  }
}
