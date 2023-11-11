import { HttpService } from '@nestjs/axios';
import { classToQueryString } from 'libs/@utils/common.utils';
import { Inject, Injectable } from '@nestjs/common';
import {
  API_CREATE_LIST_ON_BOARD,
  API_GET_LISTS_ON_BOARD,
} from './data-access/trello.constant';
import { catchError, firstValueFrom } from 'rxjs';
import { List } from './data-access/trello.interface';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { CreateListRequestDTO } from './data-access/dto/create-list.request';

@Injectable()
export class TrelloService {
  constructor(
    private readonly httpService: HttpService,
    @Inject('AXIOS_CONFIG') private readonly axiosConfig: AxiosRequestConfig,
  ) {}

  getListsOnBoard = async (boardId: string): Promise<List[]> => {
    const url = API_GET_LISTS_ON_BOARD.replace('{boardId}', boardId);

    const { data } = await firstValueFrom(
      this.httpService.get<List[]>(url, this.axiosConfig).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  };

  createListOnBoard = async (listRequest: CreateListRequestDTO) => {
    const url = `${API_CREATE_LIST_ON_BOARD}?${classToQueryString(
      listRequest,
    )}`;

    const { data } = await firstValueFrom(
      this.httpService.post(url, null, this.axiosConfig).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  };
}
