// @ts-ignore
import { Controller, Get } from '@nestjs/common';
@Controller('graphql')
export class GraphqlsController {
  constructor(

  ) {}

  @Get('list')
  async list(){
    const env = process.env.NODE_ENV;
    return  `graphql---${env}`
  }
}
