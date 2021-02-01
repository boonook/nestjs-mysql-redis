import { Module } from '@nestjs/common';
import { UserController } from '@views/user/user.controller';
import { UserService } from '@views/user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
