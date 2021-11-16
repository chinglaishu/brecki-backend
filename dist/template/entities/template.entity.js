"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateSchema = exports.Template = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const base_entity_1 = require("../../utils/base/base.entity");
let Template = class Template extends base_entity_1.BaseEntity {
};
Template = __decorate([
    (0, mongoose_1.Schema)()
], Template);
exports.Template = Template;
exports.TemplateSchema = mongoose_1.SchemaFactory.createForClass(Template);
exports.TemplateSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.TemplateSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
//# sourceMappingURL=template.entity.js.map