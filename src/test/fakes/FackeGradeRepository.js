export class FackeGradeRepository{
    constructor(rows = []){
        this.rows = rows;
    }
    async findByStudentId(studentId){
        return this.rows;
    }
}