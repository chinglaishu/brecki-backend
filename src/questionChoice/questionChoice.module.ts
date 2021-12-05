import { Module } from '@nestjs/common';
import { QuestionChoiceService } from './questionChoice.service';
import { QuestionChoiceController } from './questionChoice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionChoice, QuestionChoiceSchema } from './entities/questionChoice.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionChoice.name, schema: QuestionChoiceSchema },
    ]),
  ],
  controllers: [QuestionChoiceController],
  providers: [QuestionChoiceService],
  exports: [QuestionChoiceService],
})
export class QuestionChoiceModule {}
