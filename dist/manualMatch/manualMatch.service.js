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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualMatchService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../utils/base/base.service");
const manualMatch_entity_1 = require("./entities/manualMatch.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const filter_1 = require("../core/filter/filter");
const helper_1 = require("../systemMatch/helper/helper");
let ManualMatchService = class ManualMatchService extends base_service_1.BaseService {
    constructor(model) {
        super(model);
        this.model = model;
        this.createAddUserId = true;
    }
    async populateExecList(results) {
        if (!results) {
            return results;
        }
        const field = helper_1.default.getMatchUserPersonalInfoField();
        for (let i = 0; i < results.length; i++) {
            results[i] = await results[i].populate("matchUsers", field).execPopulate();
        }
        return results;
    }
    async populateExec(result) {
        if (!result) {
            return result;
        }
        const field = helper_1.default.getMatchUserPersonalInfoField();
        result = await result.populate("matchUsers", field).execPopulate();
        return result;
    }
};
ManualMatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(manualMatch_entity_1.ManualMatch.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ManualMatchService);
exports.ManualMatchService = ManualMatchService;
//# sourceMappingURL=manualMatch.service.js.map