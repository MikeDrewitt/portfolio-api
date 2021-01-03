"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var adventures_route_1 = __importDefault(require("./adventures.route"));
var status_route_1 = __importDefault(require("./status.route"));
var users_route_1 = __importDefault(require("./users.route"));
var api_errors_1 = require("../errors/api.errors");
var Router = express_1.default.Router();
Router.use("/adventures", adventures_route_1.default);
Router.use("/status", status_route_1.default);
Router.use("/users", users_route_1.default);
Router.use("/", function (req, res, next) { return res.status(404).send(api_errors_1.NotFound); });
exports.default = Router;
//# sourceMappingURL=routes.js.map