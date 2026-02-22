export class GradeValue {
    constructor(value) {
        this._validate(value);
        this._value = value;
        Object.freeze(this);
    }
    _validate(value) {
        if (value === undefined || value === null) {
            throw new Error('Grade value is required');
        }
        
        if(typeof value !== 'number') {
            throw new Error('Grade value must be a number');
        }

        if (value < 1 || value > 5) {
            throw new Error('Grade value must be between 1 and 5');
        }
    }

    get value() {
        return this._value;
    }

    isApproved() {
        return this._value >= 60;
    }
    equals(other) {
        return other instanceof GradeValue && this._value === other._value;
    }
}
