"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports._delete = exports.patch = exports.post = exports.detail = exports.get = void 0;
var express_validator_1 = require("express-validator");
var User_model_1 = __importDefault(require("../models/User.model"));
var passport_1 = __importDefault(require("passport"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var api_errors_1 = require("../errors/api.errors");
function get(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var users, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, User_model_1.default.list()];
                case 1:
                    users = _a.sent();
                    res.status(200).send(users);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    next(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get = get;
function detail(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, user, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, User_model_1.default.retrieve(id)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        return [2 /*return*/, res.status(404).json({ error: api_errors_1.NotFound })];
                    res.status(200).send(user);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    next(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.detail = detail;
function post(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, _a, username, password, user, dbUser, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty())
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    _a = req.body, username = _a.username, password = _a.password;
                    user = new User_model_1.default(username);
                    return [4 /*yield*/, user.create(password)];
                case 1:
                    dbUser = _b.sent();
                    res.status(201).send(dbUser);
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _b.sent();
                    res.status(400).json({ message: err_3.detail });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.post = post;
function patch(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var body, id, errors, user, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    body = req.body;
                    id = req.params.id;
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty())
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    return [4 /*yield*/, User_model_1.default.retrieve(id)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        res.status(404).send();
                    return [4 /*yield*/, user.update(body)];
                case 2:
                    _a.sent();
                    res.status(200).send();
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    next(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.patch = patch;
function _delete(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, dbResponse, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, User_model_1.default.delete(id)];
                case 1:
                    dbResponse = _a.sent();
                    if (!dbResponse.affected)
                        return [2 /*return*/, res.status(404).json({ error: api_errors_1.NotFound })];
                    res.status(204).send();
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    next(err_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports._delete = _delete;
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            passport_1.default.authenticate('login', function (err, user, info) { return __awaiter(_this, void 0, void 0, function () {
                var error;
                var _this = this;
                return __generator(this, function (_a) {
                    try {
                        if (err || !user) {
                            error = new Error('An error occurred.');
                            return [2 /*return*/, next(error)];
                        }
                        req.login(user, { session: false }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                            var body, token;
                            return __generator(this, function (_a) {
                                if (error)
                                    return [2 /*return*/, next(error)];
                                body = { id: user.id, username: user.username };
                                token = jsonwebtoken_1.default.sign({ user: body }, 'TOP_SECRET');
                                return [2 /*return*/, res.json({ token: token })];
                            });
                        }); });
                    }
                    catch (error) {
                        return [2 /*return*/, next(error)];
                    }
                    return [2 /*return*/];
                });
            }); })(req, res, next);
            return [2 /*return*/];
        });
    });
}
exports.login = login;
//# sourceMappingURL=users.controller.js.map