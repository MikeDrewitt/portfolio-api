"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generic = void 0;
function generic(req, res, next) {
    var _a = req.user, user = _a === void 0 ? null : _a, _b = req.users, users = _b === void 0 ? [] : _b, _c = req.status, status = _c === void 0 ? 200 : _c;
    var response = user ? serialize(user) : users.map(serialize);
    res.status(status).send(response);
}
exports.generic = generic;
function serialize(user) {
    return {
        id: user.id,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
    };
}
//# sourceMappingURL=user.serializer.js.map