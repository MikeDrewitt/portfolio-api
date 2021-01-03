import { Unknown } from '../errors/api.errors';

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
function globalErrorHandler(err: Error, req: any, res: any, next: any) {
  if (err instanceof Error) {
    if (err.message === "Unimplemented") res.status(501).send("Endpoint has not been implemented");
  }

  res.status(400).send(Unknown);
}

export default globalErrorHandler;
