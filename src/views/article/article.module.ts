// @ts-ignore
import { Module } from '@nestjs/common';
import { ArticleController } from '@views/article/article.controller';
import { ArticleService } from '@views/article/article.service';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
