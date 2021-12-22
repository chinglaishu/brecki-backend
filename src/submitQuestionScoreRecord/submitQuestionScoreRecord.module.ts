import { Module } from '@nestjs/common';
import { SubmitQuestionScoreRecordService } from './submitQuestionScoreRecord.service';
import { SubmitQuestionScoreRecordController } from './submitQuestionScoreRecord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmitQuestionScoreRecord, SubmitQuestionScoreRecordSchema } from './entities/submitQuestionScoreRecord.entity';
import { QuestionScoreRecordModule } from 'src/questionScoreRecord/questionScoreRecord.module';
import { PersonalityModule } from 'src/personality/personality.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubmitQuestionScoreRecord.name, schema: SubmitQuestionScoreRecordSchema },
    ]),
    QuestionScoreRecordModule,
    PersonalityModule,
    UserModule,
  ],
  controllers: [SubmitQuestionScoreRecordController],
  providers: [SubmitQuestionScoreRecordService],
  exports: [SubmitQuestionScoreRecordService],
})
export class SubmitQuestionScoreRecordModule {}
