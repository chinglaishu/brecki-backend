import { Module } from '@nestjs/common';
import { QuestionChoiceRecordService } from './questionChoiceRecord.service';
import { QuestionChoiceRecordController } from './questionChoiceRecord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionChoiceRecord, QuestionChoiceRecordSchema } from './entities/questionChoiceRecord.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionChoiceRecord.name, schema: QuestionChoiceRecordSchema },
    ]),
  ],
  controllers: [QuestionChoiceRecordController],
  providers: [QuestionChoiceRecordService],
  exports: [QuestionChoiceRecordService],
})
export class QuestionChoiceRecordModule {}
