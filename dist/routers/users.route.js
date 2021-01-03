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
// Serialization
var user_serializer_1 = require("../serializers/user.serializer");
var Router = express_1.default.Router();
Router.get("/", users_controller_1.get, user_serializer_1.generic);
Router.get("/:id", users_controller_1.detail, user_serializer_1.generic);
Router.post("/", users_validator_1.create, users_controller_1.post, user_serializer_1.generic);
Router.patch("/:id", users_validator_1.update, users_controller_1.patch);
Router.delete("/:id", passport_middleware_1.userAuth, users_controller_1._delete);
Router.post("/login", users_validator_1.create, users_controller_1.login);
exports.default = Router;
//# sourceMappingURL=users.route.js.map