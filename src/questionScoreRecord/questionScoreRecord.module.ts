import { Module } from '@nestjs/common';
import { QuestionScoreRecordService } from './questionScoreRecord.service';
import { QuestionScoreRecordController } from './questionScoreRecord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionScoreRecord, QuestionScoreRecordSchema } from './entities/questionScoreRecord.entity';
import { UserModule } from 'src/user/user.module';
import { PersonalityModule } from 'src/personality/personality.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionScoreRecord.name, schema: QuestionScoreRecordSchema },
    ]),
    UserModule,
    PersonalityModule,
  ],
  controllers: [QuestionScoreRecordController],
  providers: [QuestionScoreRecordService],
  exports: [QuestionScoreRecordService],
})
export class QuestionScoreRecordModule {}
