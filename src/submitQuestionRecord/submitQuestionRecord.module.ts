import { Module } from '@nestjs/common';
import { SubmitQuestionRecordService } from './submitQuestionRecord.service';
import { SubmitQuestionRecordController } from './submitQuestionRecord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmitQuestionRecord, SubmitQuestionRecordSchema } from './entities/submitQuestionRecord.entity';
import { QuestionChoiceRecordModule } from 'src/questionChoiceRecord/questionChoiceRecord.module';
import { UserModule } from 'src/user/user.module';
import { Question, QuestionSchema } from 'src/question/entities/question.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubmitQuestionRecord.name, schema: SubmitQuestionRecordSchema },
      { name: Question.name, schema: QuestionSchema },
    ]),
    QuestionChoiceRecordModule,
    UserModule,
  ],
  controllers: [SubmitQuestionRecordController],
  providers: [SubmitQuestionRecordService],
  exports: [SubmitQuestionRecordService],
})
export class SubmitQuestionRecordModule {}
