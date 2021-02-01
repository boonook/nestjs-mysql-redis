import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GolbalauthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(`这里是全局的路由守卫api-${request.originalUrl}-${request.headers.host}`);
    if(request.originalUrl+''!=='/user/list'){
      try {
        return true
      }catch (e) {
        throw new HttpException("该api没有访问权限",HttpStatus.UNAUTHORIZED)
      }
    }else{
      throw new HttpException("该api没有访问权限",HttpStatus.UNAUTHORIZED)
    }
  }
}
