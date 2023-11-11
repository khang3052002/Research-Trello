import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from 'libs/module/cats/cats.module';
import { TrelloModule } from 'libs/module/trello/trello.module';

@Module({
  imports: [CatsModule, TrelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
