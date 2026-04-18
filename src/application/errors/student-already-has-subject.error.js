export class StudentAlreadyHasSubjectError extends Error {
    constructor(subject) {
        super(`Student already has subject: ${subject}`);
        this.name = 'StudentAlreadyHasSubjectError';
    }
}