// @ts-ignore
import { Controller, Get } from '@nestjs/common';

@Controller('graphql')
export class GraphqlsController {
  @Get('list')
  async list(){
    return  'graphql'
  }
}
