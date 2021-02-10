// @ts-ignore
import { Controller, Get } from '@nestjs/common';
const config = require('../../config/database.config');

@Controller('graphql')
export class GraphqlsController {
  constructor(

  ) {}

  @Get('list')
  async list(){
    const env = process.env.NODE_ENV;
    console.log(config.default);
    return  `graphql---${env}--${config.default.dev.sql.port}`
  }
}
