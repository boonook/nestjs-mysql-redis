// @ts-ignore
import { Module } from '@nestjs/common';
import { GraphqlsController } from '@views/graphql/graphqls.controller';
@Module({
  imports: [],
  controllers: [GraphqlsController],
  providers: [],
})
export class GraphqlsModule {}
