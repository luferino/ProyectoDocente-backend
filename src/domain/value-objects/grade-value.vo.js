import { Result } from '../shared/result.js';
import { InvalidGradeValueError } from '../errors/domain.error.js';

export class GradeValue {
    constructor(value) {
        this._value = value;
        Object.freeze(this);
    }

    static create(value) {
        if (value === undefined || value === null) {
            return Result.fail(new InvalidGradeValueError());
        }
        
        if(typeof value !== 'number') {
            return Result.fail(new InvalidGradeValueError());
        }

        if (value < 1 || value > 5) {
            return Result.fail(new InvalidGradeValueError());
        }

        return Result.ok(new GradeValue(value));
    }

    get value() {
        return this._value;
    }

    isApproved() {
        return this._value >= 2;
    }
}
