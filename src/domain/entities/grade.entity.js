export class Grade {
    constructor ({id, studentId, studentName,subjectId, value}){

        if (value < 0 || value > 100) {
            throw new Error('Invalid grade value. It must be between 0 and 100.');
        }

        this.id = id;
        this.studentId = studentId;
        this.studentName = studentName;
        this.subjectId = subjectId;
        this.value = value;
    }

    isApproved() {
        return this.value >= 60;
    }
}