"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = void 0;
var express_validator_1 = require("express-validator");
exports.create = [
    express_validator_1.check("username").isString().trim(),
    express_validator_1.check("password").isString().trim(),
];
exports.update = [
    express_validator_1.check("username").isString().trim().optional({ nullable: true }),
];
//# sourceMappingURL=users.validator.js.map