import { DomainError } from './domain.error.js';

export class StudentHasNoGradesError extends DomainError {
    constructor() {
        super('Student has no grades.');
        this.name = 'STUDENT_HAS_NO_GRADES  ';  
    }
}