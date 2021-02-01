import { Injectable } from '@nestjs/common';
@Injectable()
export class GetConfigService {
  // 公共服务的方法
  getConfig(data) {
    return data;
  }
}
