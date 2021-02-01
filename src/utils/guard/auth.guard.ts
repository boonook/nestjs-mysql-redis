import { CanActivate, ExecutionContext, Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

/////这里是一个简单的路由守卫
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('守卫执行了');
    const request = context.switchToHttp().getRequest();
    if(request.body.username+''==='boonook'){
      try{
        return true;
      }catch (e) {
        throw new HttpException("该用户没有访问权限",HttpStatus.UNAUTHORIZED)
      }
    }else{
      throw new HttpException("该用户没有访问权限",HttpStatus.UNAUTHORIZED)
    }
  }
}
