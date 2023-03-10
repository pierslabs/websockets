import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesWsModule } from './messages-ws/messages-ws.module';

@Module({
  imports: [MessagesWsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
