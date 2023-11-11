import { Controller, Get, HttpStatus } from '@nestjs/common';
import { HttpConstant } from 'libs/@constant/HttpConstant/HttpConstant';
import { SuccessApiRespone } from 'libs/@core/models/http/success-api-respone.model';
import { CatsService } from './cats.service';
import { ApiRespone } from 'libs/@core/models/http/api-respone.model';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('/')
  getName() {
    console.log('ai do goi tooi');
    const apiRespone: ApiRespone = new SuccessApiRespone(
      HttpStatus.OK,
      HttpConstant.SUCCESS_MESSAGE,
      this.catsService.getCat(),
    );

    return apiRespone;
  }
}
