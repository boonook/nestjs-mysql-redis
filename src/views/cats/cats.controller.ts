import { Controller, Get, Param, Post,Body,Delete,Ip } from '@nestjs/common';
import { CatsService } from '@views/cats/cats.service';
import {Result} from '@/middlewares/result/result.interface'
import { GetConfigService } from '@/utils/getConfig';
import { CacheService } from '@/utils/redisModal/cache.service';
import { ApiTags, ApiParam, ApiQuery, ApiHeader,ApiResponse } from '@nestjs/swagger';
import {Cats} from './cats'

@ApiTags('用户,安全')
@Controller('cats')
export class CatsController {
  constructor(
    private readonly appService: CatsService,
    private readonly GetConfigService: GetConfigService,
    private readonly CacheService: CacheService,
  ) {

  }
  @Get('list')
  @ApiHeader({
    name: 'authoriation',
    required: true,
    description: '本次请求请带上token',
  })
  async list(): Promise<Result>{
    let data = await this.appService.list();
    console.log(this.GetConfigService.getConfig('我是公共服务'));
    const client = JSON.parse(await this.CacheService.get('foo'));
    /////tools.getName('boonook');////这样是无法引入封装的方法的
    return { code: 200, message: data };
  }

  @Get('/get/:id')
  @ApiParam({
    name: 'id',
    description: '这是用户id',
  })
  @ApiQuery({
    name: 'role',
    description: '这是需要传递的参数',
  })
  @ApiHeader({
    name: 'authoriation',
    required: true,
    description: '本次请求请带上token',
  })
  @ApiResponse({ status: 200, description: '请求成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 501, description: '本次请求请带上token'})
  async get(@Param('id') id: string,@Ip() ip:string){
    console.log('访问者的ip地址'+ip);
    return id
  }

  @Post('/add')
  async addUser(@Body() cats: Cats){
      return cats
  }

  /**
   * delete不能直接通过url访问
   * ***/
  @Delete('/del/:id')
  async del(@Param('id') id: string,){
    return id
  }
}
