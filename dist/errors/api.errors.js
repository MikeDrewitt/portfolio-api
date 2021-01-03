"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unknown = exports.NotFound = exports.ApiError = void 0;
var ApiError = /** @class */ (function () {
    function ApiError(error) {
        this.error = error;
    }
    return ApiError;
}());
exports.ApiError = ApiError;
exports.NotFound = new ApiError('Not found');
exports.Unknown = new ApiError('And unexpected error occured');
//# sourceMappingURL=api.errors.js.map