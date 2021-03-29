// @ts-ignore
import { Controller, Get } from '@nestjs/common';
import {User} from './common/user.decorator'
@Controller('zsq')
export class ZhuangshiqiController {
  constructor() {

  }

  @Get('list')
  async list(@User('firstName') firstName: string){
    console.log(firstName)
  }
}
