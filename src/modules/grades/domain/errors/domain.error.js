export class DomainError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class InvalidGradeValueError extends DomainError {
    constructor(message) {
        super("Grade value must be between 1 and 5");
    }
}