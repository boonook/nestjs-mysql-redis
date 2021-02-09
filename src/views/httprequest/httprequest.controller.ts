import { Controller, Get } from '@nestjs/common';
import {HttprequestService} from './httprequest.service'

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
}
