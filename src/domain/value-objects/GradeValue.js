export class GradeValue {
    constructor(value) {
        if (value < 0 || value > 100) {
            throw new Error('Grade value must be between 0 and 100');
        }
        this.value = value;
    }
}
