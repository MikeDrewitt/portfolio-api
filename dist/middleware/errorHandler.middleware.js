"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_errors_1 = require("@constants/errors/api.errors");
/**
 * Middleware function that acts as a error handler for the routers/controllers/ other middleware.
 * As a general rule of thumb for this API, we try to only send back errors of the same structure
 *
 * Also never send back an actual JS error. No one wants to see a stack trace
 *
 * TODO - might want to add some kind of network error logging.
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function globalErrorHandler(err, req, res, next) {
    if (err instanceof Error) {
        if (err.message === "Unimplemented")
            res.status(501).send(new api_errors_1.ApiError("Endpoint has not been implemented"));
        else
            res.status(400).send(new api_errors_1.ApiError(err.message));
    }
    res.status(400).send(api_errors_1.Unknown);
}
exports.default = globalErrorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map