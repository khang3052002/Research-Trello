import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { HttpConstant } from 'libs/@constant/HttpConstant/HttpConstant';
import { SuccessApiRespone } from 'libs/@core/models/http/success-api-respone.model';
import { TrelloService } from './trello.service';
import { ApiRespone } from 'libs/@core/models/http/api-respone.model';
import { CreateListRequestDTO } from './data-access/dto/create-list.request';
import { Response } from 'express';
@Controller('trello')
export class TrelloController {
  constructor(private trelloService: TrelloService) {}

  @Get('')
  headRequest(@Res() response: Response) {
    return response.status(HttpStatus.OK).send();
  }

  @Post('')
  responeFromWebHook(@Body() body: any, @Res() response: Response) {
    console.log(body);
    return response.status(HttpStatus.OK).send();
  }

  @Get('/board/:id/lists')
  async getName(@Param('id') boardId: string) {
    const apiRespone: ApiRespone = new SuccessApiRespone(
      HttpStatus.OK,
      HttpConstant.SUCCESS_MESSAGE,
      await this.trelloService.getListsOnBoard(boardId),
    );

    return apiRespone;
  }

  @Post('/board/create-list')
  async createListOnBoard(@Body() listRequest: CreateListRequestDTO) {
    const apiRespone: ApiRespone = new SuccessApiRespone(
      HttpStatus.OK,
      HttpConstant.SUCCESS_MESSAGE,
      await this.trelloService.createListOnBoard(listRequest),
    );

    return apiRespone;
  }
}
