"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var express_1 = __importDefault(require("express"));
// Validator
var users_validator_1 = require("../validators/users.validator");
// Controller
var users_controller_1 = require("../controllers/users.controller");
var Router = express_1.default.Router();
Router.get("/", users_controller_1.get);
Router.post("/", users_validator_1.create, users_controller_1.post);
exports.default = Router;
//# sourceMappingURL=users.route.js.map