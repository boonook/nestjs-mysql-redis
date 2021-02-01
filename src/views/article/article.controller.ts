import { Controller, Get, Query , Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import {Result} from '@/middlewares/result/result.interface'

@Controller('article')
export class ArticleController {
  constructor(private readonly appService: ArticleService) {}
  @Get('list')
  async list(): Promise<Result> {
    let data = await this.appService.list();
    return {code:200, message: '查询成功', data:data };
  }

  @Get('add')
  async add(@Query() query): Promise<Result>{
    return {code:200, message: '查询成功', data:'123' };
  }

  @Get('findOne')
  async findOne(): Promise<Result> {
    return {code:200, message: '这是article里面的delete', data:'123' };
  }

  @Delete(':id')
  async remove(@Param() params): Promise<Result>{
    return { code: 200, message: '删除用户成功' };
  }

}
