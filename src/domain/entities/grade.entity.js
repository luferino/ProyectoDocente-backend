import { GradeValue } from '../value-objects/grade-value.vo.js';
export class Grade {
    constructor ({id, studentId, studentName,subjectId,subjectName, value}){
        this.id = id;
        this.studentId = studentId;
        this.studentName = studentName;
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.value = new GradeValue(value);

    }

    isApproved() {
        return this.value.isApproved();
    }
}