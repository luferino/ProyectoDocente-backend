export class AddGradeCommand {
    constructor(studentId, subject, value){
        this.studentId = studentId;
        this.subject = subject;
        this.value = value;
    }
}