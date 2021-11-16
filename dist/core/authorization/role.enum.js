"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const constant_1 = require("../../constant/constant");
var Role;
(function (Role) {
    Role[Role["Admin"] = constant_1.ROLE_NUM.ADMIN] = "Admin";
    Role[Role["User"] = constant_1.ROLE_NUM.USER] = "User";
    Role[Role["Guest"] = constant_1.ROLE_NUM.GUEST] = "Guest";
})(Role = exports.Role || (exports.Role = {}));
//# sourceMappingURL=role.enum.js.map