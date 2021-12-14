import { Module } from '@nestjs/common';
import { QuestionNumService } from './questionNum.service';
import { QuestionNumController } from './questionNum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionNum, QuestionNumSchema } from './entities/questionNum.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionNum.name, schema: QuestionNumSchema },
    ]),
  ],
  controllers: [QuestionNumController],
  providers: [QuestionNumService],
  exports: [QuestionNumService],
})
export class QuestionNumModule {}
