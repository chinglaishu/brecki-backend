"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionScoreRecordController = void 0;
const common_1 = require("@nestjs/common");
const questionScoreRecord_service_1 = require("./questionScoreRecord.service");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const constant_1 = require("../constant/constant");
const utilsFunction_1 = require("../utils/utilsFunction/utilsFunction");
const user_service_1 = require("../user/user.service");
const personality_service_1 = require("../personality/personality.service");
let QuestionScoreRecordController = class QuestionScoreRecordController extends base_controller_1.BaseController {
    constructor(service, userService, personalityService) {
        super(service);
        this.service = service;
        this.userService = userService;
        this.personalityService = personalityService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
    }
};
QuestionScoreRecordController = __decorate([
    (0, common_1.Controller)('question-score-record'),
    __metadata("design:paramtypes", [questionScoreRecord_service_1.QuestionScoreRecordService,
        user_service_1.UserService,
        personality_service_1.PersonalityService])
], QuestionScoreRecordController);
exports.QuestionScoreRecordController = QuestionScoreRecordController;
//# sourceMappingURL=questionScoreRecord.controller.js.map