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
exports.QuestionChoiceController = void 0;
const common_1 = require("@nestjs/common");
const questionChoice_service_1 = require("./questionChoice.service");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
let QuestionChoiceController = class QuestionChoiceController extends base_controller_1.BaseController {
    constructor(service) {
        super(service);
        this.service = service;
    }
};
QuestionChoiceController = __decorate([
    (0, common_1.Controller)('question-choice'),
    __metadata("design:paramtypes", [questionChoice_service_1.QuestionChoiceService])
], QuestionChoiceController);
exports.QuestionChoiceController = QuestionChoiceController;
//# sourceMappingURL=questionChoice.controller.js.map