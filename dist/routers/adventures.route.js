"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var express_1 = __importDefault(require("express"));
// Validator
var adventures_validator_1 = require("../validators/adventures.validator");
// Controller
var adventures_controller_1 = require("../controllers/adventures.controller");
var Router = express_1.default.Router();
Router.get("/", adventures_controller_1.get);
Router.post("/", adventures_validator_1.create, adventures_controller_1.post);
exports.default = Router;
//# sourceMappingURL=adventures.route.js.map