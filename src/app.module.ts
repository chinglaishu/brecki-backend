import { CacheModule, Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './core/authentication/jwt.guard';
import { RolesGuard } from './core/authorization/role.guard';
import { UserModule } from './user/user.module';
import { AuthModule } from "./auth/auth.module";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from './constant/config';
import { ConfigModule } from './config/config.module';
import { MatchModule } from './match/match.module';
import { QuestionModule } from './question/question.module';
import { PersonalityModule } from './personality/personality.module';
import { QuestionChoiceRecordModule } from './questionChoiceRecord/questionChoiceRecord.module';
import { QuestionScoreRecordModule } from './questionScoreRecord/questionScoreRecord.module';
import { SubmitQuestionRecordModule } from './submitQuestionRecord/submitQuestionRecord.module';
import { QuestionChoiceModule } from './questionChoice/questionChoice.module';
import { QuestionNumModule } from './questionNum/questionNum.module';
import { ManualMatchModule } from './manualMatch/manualMatch.module';
import { SystemMatchModule } from './systemMatch/systemMatch.module';
import { SocketModule } from './socket/socket.module';
import { SubmitQuestionScoreRecordModule } from './submitQuestionScoreRecord/submitQuestionScoreRecord.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        return {
          uri: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
        };
      },
    }),
    UserModule,
    AuthModule,
    ConfigModule,
    MatchModule,
    QuestionModule,
    QuestionChoiceModule,
    PersonalityModule,
    QuestionChoiceRecordModule,
    QuestionScoreRecordModule,
    SubmitQuestionRecordModule,
    SubmitQuestionScoreRecordModule,
    QuestionNumModule,
    ManualMatchModule,
    SystemMatchModule,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
