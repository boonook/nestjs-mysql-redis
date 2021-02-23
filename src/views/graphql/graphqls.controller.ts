// @ts-ignore
import { Controller, Get } from '@nestjs/common';
const config = require('../../config/database.config');

@Controller('graphql')
export class GraphqlsController {
  constructor(

  ) {}

  @Get('list')
  async list(){

  }
}
