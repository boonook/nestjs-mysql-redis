import { Controller, Get, Query , Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
@Controller('article')
export class ArticleController {
  constructor(private readonly appService: ArticleService) {}
  @Get('list')
  list(): string {
    return this.appService.list();
  }

  @Get('add')
  add(@Query() query): { code: number; message: string } {
    return { code: 200, message: '删除用户成功' };
  }

  @Get('findOne')
  findOne(): string {
    return '这是article里面的delete';
  }

  @Delete(':id')
  remove(@Param() params){
    return { code: 200, message: '删除用户成功' };
  }

}
