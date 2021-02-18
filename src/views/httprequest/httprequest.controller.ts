import { Controller, Get,Logger } from '@nestjs/common';
import {HttprequestService} from './httprequest.service'
import { join } from 'path';
import {readFile} from 'fs'
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
    const file = join(__dirname, 'city.json');
    let data = await readFile(file, 'utf-8', function(err, data) {
      return {err,data}
    })
    console.log(data)
  }
}
