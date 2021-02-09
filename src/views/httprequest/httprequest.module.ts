// @ts-ignore
import { Module } from '@nestjs/common';
import { HttprequestController } from '@views/httprequest/httprequest.controller';
import { HttprequestService } from '@views/httprequest/httprequest.service';

@Module({
  imports: [],
  controllers: [HttprequestController],
  providers: [HttprequestService],
})
export class HttprequestModule {}
