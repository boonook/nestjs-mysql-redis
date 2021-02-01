import { Injectable } from '@nestjs/common';
@Injectable()
export class CatsService {
  list(){
    return 'cats-list'
  }
}
