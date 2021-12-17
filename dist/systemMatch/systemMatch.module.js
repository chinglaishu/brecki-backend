"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemMatchModule = void 0;
const common_1 = require("@nestjs/common");
const systemMatch_service_1 = require("./systemMatch.service");
const systemMatch_controller_1 = require("./systemMatch.controller");
const mongoose_1 = require("@nestjs/mongoose");
const systemMatch_entity_1 = require("./entities/systemMatch.entity");
const user_module_1 = require("../user/user.module");
let SystemMatchModule = class SystemMatchModule {
};
SystemMatchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: systemMatch_entity_1.SystemMatch.name, schema: systemMatch_entity_1.SystemMatchSchema },
            ]),
            user_module_1.UserModule,
        ],
        controllers: [systemMatch_controller_1.SystemMatchController],
        providers: [systemMatch_service_1.SystemMatchService],
        exports: [systemMatch_service_1.SystemMatchService],
    })
], SystemMatchModule);
exports.SystemMatchModule = SystemMatchModule;
//# sourceMappingURL=systemMatch.module.js.map