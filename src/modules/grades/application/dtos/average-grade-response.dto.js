export class AverageGradeResponseDTO {
    constructor({studentId, studentName, average}) {
        this.student = {    
            id: studentId,
            name: studentName
        }
        this.average = average;
    }
}