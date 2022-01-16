"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const config_module_1 = require("../config/config.module");
const systemMatch_module_1 = require("../systemMatch/systemMatch.module");
const manualMatch_module_1 = require("../manualMatch/manualMatch.module");
const match_module_1 = require("../match/match.module");
const systemMatch_entity_1 = require("../systemMatch/entities/systemMatch.entity");
const manualMatch_entity_1 = require("../manualMatch/entities/manualMatch.entity");
const match_entity_1 = require("../match/entities/match.entity");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: systemMatch_entity_1.SystemMatch.name, schema: systemMatch_entity_1.SystemMatchSchema },
                { name: manualMatch_entity_1.ManualMatch.name, schema: manualMatch_entity_1.ManualMatchSchema },
                { name: match_entity_1.Match.name, schema: match_entity_1.MatchSchema },
            ]),
            (0, common_1.forwardRef)(() => systemMatch_module_1.SystemMatchModule),
            (0, common_1.forwardRef)(() => match_module_1.MatchModule),
            (0, common_1.forwardRef)(() => manualMatch_module_1.ManualMatchModule),
            config_module_1.ConfigModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map