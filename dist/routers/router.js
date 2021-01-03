"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var adventures_router_1 = __importDefault(require("@routers/adventures.router"));
var status_router_1 = __importDefault(require("@routers/status.router"));
var users_router_1 = __importDefault(require("@routers/users.router"));
var api_errors_1 = require("@constants/errors/api.errors");
var Router = express_1.default.Router();
Router.use("/adventures", adventures_router_1.default);
Router.use("/status", status_router_1.default);
Router.use("/users", users_router_1.default);
Router.use("/", function (req, res, next) { return res.status(404).send(api_errors_1.NotFound); });
exports.default = Router;
//# sourceMappingURL=router.js.map