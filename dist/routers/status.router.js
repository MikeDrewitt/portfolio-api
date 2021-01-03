"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var express_1 = __importDefault(require("express"));
// Controller
var status_controller_1 = require("@controllers/status.controller");
// Middleware
var auth_middleware_1 = require("@middleware/auth.middleware");
var Router = express_1.default.Router();
Router.get("/", status_controller_1.get);
Router.get("/checkAuth", auth_middleware_1.userAuth, status_controller_1.get);
Router.get("/checkSystem", auth_middleware_1.systemAuth, status_controller_1.get);
exports.default = Router;
//# sourceMappingURL=status.router.js.map