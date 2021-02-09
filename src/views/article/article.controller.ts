import { Controller, Get, Query, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import {Result} from '@/middlewares/result/result.interface'
import {InjectMysql,Mysql} from 'mysql2-nestjs';


@Controller('article')
export class ArticleController {
  constructor(
    private readonly appService: ArticleService,
    @InjectMysql()
    private readonly mysql: Mysql
  ) {}
  @Get('list')
  async list(): Promise<Result> {
    const [result, fields] = await this.mysql.query("SELECT * from user");
    let data = await this.appService.list();
    return {code:200, message: '查询成功', data:result };
  }

  @Get('add')
  async add(@Query() query){
    // return  await this.articleResolver.getHello();
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
