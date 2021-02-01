import { Controller, Get, Query, Param, Delete, HttpCode } from '@nestjs/common';
import { ArticleService } from './article.service';
import {Result} from '@/middlewares/result/result.interface'

@Controller('article')
export class ArticleController {
  constructor(private readonly appService: ArticleService) {}
  @Get('list')
  @HttpCode(200)
  async list(): Promise<Result> {
    let data = await this.appService.list();
    return {code:200, message: '查询成功', data:data };
  }

  @Get('add')
  @HttpCode(200)
  async add(@Query() query): Promise<Result>{
    return {code:200, message: '查询成功', data:'123' };
  }

  @Get('findOne')
  @HttpCode(200)
  async findOne(): Promise<Result> {
    return {code:200, message: '这是article里面的delete', data:'123' };
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param() params): Promise<Result>{
    return { code: 200, message: '删除用户成功' };
  }

}
