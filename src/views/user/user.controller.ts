import { Body, Controller, Get, Post,HttpCode,UseGuards } from '@nestjs/common';
import { UserService } from '@views/user/user.service';
import {Result} from '@/middlewares/result/result.interface'
import {UserLoginDto} from './dto/user.login.dto'
import {AuthGuard} from '@/utils/guard/auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('list')
  @HttpCode(200)
  async list(): Promise<Result>{
    let data = await this.appService.list();
    return { code: 200, message: data };
  }

  @Post('login')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  async login(@Body() userlogindto:UserLoginDto): Promise<Result>{
    return { code:200,message: '操作成功',data:userlogindto};
  }
}
