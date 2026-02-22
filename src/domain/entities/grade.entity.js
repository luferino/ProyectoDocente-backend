import { GradeValue } from '../value-objects/grade-value.vo.js';
import { Result } from '../shared/result.js';

export class Grade {
    constructor ({id, studentId, studentName,subjectId,subjectName, value}){
        this.id = id;
        this.studentId = studentId;
        this.studentName = studentName;
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.value = new GradeValue(value);

    }
    static create(data) {
        const gradeOrError = GradeValue.create(data.value);

        if (gradeOrError.isFailure()) {
            return Result.fail(gradeOrError.error);
        }
        return Result.ok(new Grade({
            id: data.id,
            studentId: data.studentId,
            studentName: data.studentName,
            subjectId: data.subjectId,
            subjectName: data.subjectName, 
            value: gradeOrError.value
        }));
    }

    isApproved() {
        return this.value.isApproved();
    }
}