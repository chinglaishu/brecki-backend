import { Module } from '@nestjs/common';
import { SubmitQuestionRecordService } from './submitQuestionRecord.service';
import { SubmitQuestionRecordController } from './submitQuestionRecord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmitQuestionRecord, SubmitQuestionRecordSchema } from './entities/submitQuestionRecord.entity';
import { QuestionChoiceRecordModule } from 'src/questionChoiceRecord/questionChoiceRecord.module';
import { UserModule } from 'src/user/user.module';
import { Question, QuestionSchema } from 'src/question/entities/question.entity';
import { QuestionService } from 'src/question/question.service';
import { QuestionModule } from 'src/question/question.module';
import { SubmitQuestionScoreRecord } from 'src/submitQuestionScoreRecord/entities/submitQuestionScoreRecord.entity';
import { SubmitQuestionScoreRecordModule } from 'src/submitQuestionScoreRecord/submitQuestionScoreRecord.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubmitQuestionRecord.name, schema: SubmitQuestionRecordSchema },
    ]),
    QuestionChoiceRecordModule,
    UserModule,
    QuestionModule,
    SubmitQuestionScoreRecordModule,
  ],
  controllers: [SubmitQuestionRecordController],
  providers: [SubmitQuestionRecordService],
  exports: [SubmitQuestionRecordService],
})
export class SubmitQuestionRecordModule {}
