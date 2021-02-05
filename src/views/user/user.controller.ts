import { Body, Controller, Get, Post,UseGuards } from '@nestjs/common';
import { UserService } from '@views/user/user.service';
import {Result} from '@/middlewares/result/result.interface'
import {UserLoginDTO} from './dto/user.login.dto'
import {AuthGuard} from '@/utils/guard/auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('list')
  async list(): Promise<Result>{
    let data = await this.appService.list();
    return { code: 200, message: data };
  }

  @Post('login')
  @UseGuards(AuthGuard)
  async login(@Body() userlogindto:UserLoginDTO){
    return userlogindto
  }
}
