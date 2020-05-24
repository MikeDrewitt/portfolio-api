"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware function that acts as a error handler for the routers/controllers/ other middleware.
 *
 * TODO - might want to add some kind of network handler.
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function globalErrorHandler(err, req, res, next) {
    if (err instanceof Error) {
        if (err.message === "Unimplemented")
            res.status(501).send("Endpoint has not been implemented");
        else
            res.status(400).send(err.message);
    }
    res.status(400).send(err);
}
exports.default = globalErrorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map