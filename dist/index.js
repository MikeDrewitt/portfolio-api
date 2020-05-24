"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var typeorm_1 = require("typeorm");
// Middleware
var routes_1 = __importDefault(require("./routers/routes"));
var errorHandler_middleware_1 = __importDefault(require("./middleware/errorHandler.middleware"));
var app = express_1.default();
typeorm_1.createConnection()
    .then(function (connection) {
    // Libraries
    app.use(helmet_1.default());
    app.use(body_parser_1.default.json());
    app.use(cors_1.default());
    app.use(morgan_1.default("combined"));
    // Middleware
    app.use("/", routes_1.default);
    app.use(errorHandler_middleware_1.default);
    var port = process.env.PORT || 3001;
    app.listen(port, function () { return console.log("API listenting at port - " + port); });
})
    .catch(function (err) { return console.log("TypeORM connection error: ", err); });
//# sourceMappingURL=index.js.map