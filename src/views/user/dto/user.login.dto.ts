import { IsNotIn, MinLength } from 'class-validator';
export class UserLoginDTO{
  /*
  * 账号
  */
  @IsNotIn(['',undefined,null],{message: '账号不能为空'})
  username: string;

  /*
  * 密码
  */
  @MinLength(6,{
    message: '密码长度不能小于6位数'
  })
  password: string;
}
