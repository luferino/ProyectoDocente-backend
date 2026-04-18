import { httpErrorMap } from '../errors/http-errors.map.js';

export class ErrorResponseAdapter {
    static toHttp(error) {
        const status = httpErrorMap[error.name] || 500;

        return {
            status,
            body: {
                error: error.name || 'INTERNAL_SERVER_ERROR',
                message: error.message || 'An unexpected error occurred.'
            }
        }
    }
}