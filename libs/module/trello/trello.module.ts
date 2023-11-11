import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TrelloService } from './trello.service';
import { axiosConfig } from 'libs/@core/axios/axios-config';
import { TrelloController } from './trello.controller';

@Module({
  imports: [HttpModule],
  providers: [
    TrelloService,
    {
      provide: 'AXIOS_CONFIG',
      useValue: axiosConfig,
    },
  ],
  exports: [TrelloService],
  controllers: [TrelloController],
})
export class TrelloModule {}
