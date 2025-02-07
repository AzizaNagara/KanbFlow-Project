import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [BoardController],
  providers: [BoardService],
  imports: [TypeOrmModule.forFeature([Board]), UserModule],
})

export class BoardModule {}