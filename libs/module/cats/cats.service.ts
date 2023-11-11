import { Injectable } from '@nestjs/common';
import { CatResponeDTO } from './data-access/dto/cat-respone.dto';

@Injectable()
export class CatsService {
  getCat() {
    const cat = new CatResponeDTO();
    cat.description = 'hahahah';
    cat.title = 'title';
    return cat;
  }
}
