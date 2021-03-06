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
exports.PersonalityController = void 0;
const common_1 = require("@nestjs/common");
const personality_service_1 = require("./personality.service");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
let PersonalityController = class PersonalityController extends base_controller_1.BaseController {
    constructor(service) {
        super(service);
        this.service = service;
        this.findOneCheckUser = false;
        this.findAllCheckUser = false;
        this.updateCheckUser = false;
    }
};
PersonalityController = __decorate([
    (0, common_1.Controller)('personality'),
    __metadata("design:paramtypes", [personality_service_1.PersonalityService])
], PersonalityController);
exports.PersonalityController = PersonalityController;
//# sourceMappingURL=personality.controller.js.map