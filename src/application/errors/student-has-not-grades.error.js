import { DomainError } from './domain.error.js';

export class StudentHasNotGradesError extends DomainError {
    constructor() {
        super('Student has no grades.');  
    }
}