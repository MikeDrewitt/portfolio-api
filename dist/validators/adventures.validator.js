"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var express_validator_1 = require("express-validator");
exports.create = [
    express_validator_1.check("name").isString().trim().isLength({ max: 256 }),
    express_validator_1.check("description").isString().trim().optional({ nullable: true }),
    express_validator_1.check("addressLine1")
        .isString()
        .trim()
        .isLength({ max: 1024 })
        .optional({ nullable: true }),
];
//# sourceMappingURL=adventures.validator.js.map