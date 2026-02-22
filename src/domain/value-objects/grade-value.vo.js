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

        if (value < 0 || value > 100) {
            throw new Error('Grade value must be between 0 and 100');
        }
    }

    get value() {
        return this._value;
    }

    isApproved() {
        return this._value >= 60;
    }
}
