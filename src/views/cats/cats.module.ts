import { Module } from '@nestjs/common';
import { CatsController } from '@views/cats/cats.controller';
import { CatsService } from '@views/cats/cats.service';
import { LoggerMiddleware } from '@/middlewares/logger/logger.middleware';
import { GetConfigService } from '@/utils/getConfig';
import { CacheService } from '@/utils/redisModal/cache.service';
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService,GetConfigService,CacheService],
})
export class CatsModule {
  configure(consumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
