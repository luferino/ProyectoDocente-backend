import {Student} from '../../domain/entities/Students.js';
import {Grade} from '../../domain/entities/grade.entity.js';
import {GradeValue} from '../../domain//value-objects/grade-value.vo.js';

export class StudentRepositoryImpl {
    constructor(DB) {
        this.DB = DB;
    }

    async findById(studentId) {
        const estudentRow = await this.DB.query('SELECT * FROM estudiantes WHERE id = $1', [studentId]);
    }
}