import { Controller,Get,HttpCode} from '@nestjs/common';
import { CatsService } from '@views/cats/cats.service';
import {Result} from '@/middlewares/result/result.interface'
import { GetConfigService } from '@/utils/getConfig';
/// import {tools} from '@/utils/tools'

@Controller('cats')
export class CatsController {
  constructor(
    private readonly appService: CatsService,
    private readonly GetConfigService: GetConfigService,
  ) {

  }
  @Get('list')
  @HttpCode(200)
  async list(): Promise<Result>{
    let data = await this.appService.list();
    console.log(this.GetConfigService.getConfig('我是公共服务'));
    /////tools.getName('boonook');////这样是无法引入封装的方法的
    return { code: 200, message: data };
  }
}
