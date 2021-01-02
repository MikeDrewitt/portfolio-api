"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var express_1 = __importDefault(require("express"));
// Middleware
var users_validator_1 = require("../validators/users.validator");
var passport_middleware_1 = require("../middleware/passport.middleware");
// Controller
var users_controller_1 = require("../controllers/users.controller");
var Router = express_1.default.Router();
Router.get("/", users_controller_1.get);
Router.get("/:id", users_controller_1.detail);
Router.post("/", users_validator_1.create, users_controller_1.post);
Router.patch("/:id", users_validator_1.update, users_controller_1.patch);
Router.delete("/:id", passport_middleware_1.userAuth, users_controller_1._delete);
Router.post("/login", users_validator_1.create, users_controller_1.login);
exports.default = Router;
//# sourceMappingURL=users.route.js.map