import { StudentHasNotGradesError} from '../../../application/errors/student-has-not-grades.error.js';

export class ErrorResponseAdapter {
    static toHttp(error) {
        if( error instanceof StudentHasNotGradesError) {
            return {
                status: 404,
                body: {
                    error: 'STUDENT_HAS_NOT_GRADES',
                    message: error.message
                }
            };
        }

        return {
            status: 500,
            body: {
                error: 'INTERNAL_SERVER_ERROR',
                message: 'An unexpected error occurred.'
            }
        };
    }
}