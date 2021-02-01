import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@views/user/user.service';
import {Result} from '@/middlewares/result/result.interface'
import {UserLoginDto} from './dto/user.login.dto'

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('list')
  async list(): Promise<Result>{
    let data = await this.appService.list();
    return { code: 200, message: data };
  }

  @Post('login')
  async login(@Body() userlogindto:UserLoginDto): Promise<Result>{
    return { code:200,message: '操作成功',data:JSON.stringify(userlogindto) };
  }
}
