import { ErrorResponseAdapter } from '../adapters/error-response.adapter.js';

export function errorMiddleware(err, req, res, next) {
    const httpError = ErrorResponseAdapter.toHttp(err);

    res 
        .status(httpError.status)
        .json(httpError.body);
}