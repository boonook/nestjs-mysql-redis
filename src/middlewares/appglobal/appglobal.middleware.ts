import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('这里是全局的中间件');
    next();
  }
}
