/**
 * 自定义装饰器
 * **/
import { Module } from '@nestjs/common';
import { ZhuangshiqiController } from '@views/zhuangshiqi/zhuangshiqi.controller';

@Module({
  controllers:[ZhuangshiqiController]
})
export class ZhuangshiqiModule {}
