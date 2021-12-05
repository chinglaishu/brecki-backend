import { Module } from '@nestjs/common';
import { QuestionScoreRecordService } from './questionScoreRecord.service';
import { QuestionScoreRecordController } from './questionScoreRecord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionScoreRecord, QuestionScoreRecordSchema } from './entities/questionScoreRecord.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionScoreRecord.name, schema: QuestionScoreRecordSchema },
    ]),
  ],
  controllers: [QuestionScoreRecordController],
  providers: [QuestionScoreRecordService],
  exports: [QuestionScoreRecordService],
})
export class QuestionScoreRecordModule {}
