import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { SwimlaneModule } from './swimlane/swimlane.module';
import { CardModule } from './card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board/entities/board.entity';
import { Card } from './card/entities/card.entity';
import { Swimlane } from './swimlane/entities/swimlane.entity';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth/auth.guard';

@Module({
  imports: [
    UserModule,
    BoardModule,
    SwimlaneModule,
    CardModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'trello',
      entities: [Board, Card, Swimlane, User],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
