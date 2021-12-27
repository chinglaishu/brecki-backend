"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const jwt_guard_1 = require("./core/authentication/jwt.guard");
const role_guard_1 = require("./core/authorization/role.guard");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("./constant/config");
const config_module_1 = require("./config/config.module");
const match_module_1 = require("./match/match.module");
const question_module_1 = require("./question/question.module");
const personality_module_1 = require("./personality/personality.module");
const questionChoiceRecord_module_1 = require("./questionChoiceRecord/questionChoiceRecord.module");
const questionScoreRecord_module_1 = require("./questionScoreRecord/questionScoreRecord.module");
const submitQuestionRecord_module_1 = require("./submitQuestionRecord/submitQuestionRecord.module");
const questionChoice_module_1 = require("./questionChoice/questionChoice.module");
const questionNum_module_1 = require("./questionNum/questionNum.module");
const manualMatch_module_1 = require("./manualMatch/manualMatch.module");
const systemMatch_module_1 = require("./systemMatch/systemMatch.module");
const socket_module_1 = require("./socket/socket.module");
const submitQuestionScoreRecord_module_1 = require("./submitQuestionScoreRecord/submitQuestionScoreRecord.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async () => {
                    return {
                        uri: `mongodb+srv://${config_1.DB_USERNAME}:${config_1.DB_PASSWORD}@${config_1.DB_HOST}/${config_1.DB_NAME}?retryWrites=true&w=majority`,
                    };
                },
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            config_module_1.ConfigModule,
            match_module_1.MatchModule,
            question_module_1.QuestionModule,
            questionChoice_module_1.QuestionChoiceModule,
            personality_module_1.PersonalityModule,
            questionChoiceRecord_module_1.QuestionChoiceRecordModule,
            questionScoreRecord_module_1.QuestionScoreRecordModule,
            submitQuestionRecord_module_1.SubmitQuestionRecordModule,
            submitQuestionScoreRecord_module_1.SubmitQuestionScoreRecordModule,
            questionNum_module_1.QuestionNumModule,
            manualMatch_module_1.ManualMatchModule,
            systemMatch_module_1.SystemMatchModule,
            socket_module_1.SocketModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map