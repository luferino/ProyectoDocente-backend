import {Student} from '../../domain/entities/Students.js';
import {Grade} from '../../domain/entities/grade.entity.js';
import {GradeValue} from '../../domain//value-objects/grade-value.vo.js';

export class StudentRepositoryImpl {
    constructor(DB) {
        this.DB = DB;
    }

    async findById(studentId) {
        const estudentRow = await this.DB('students')
            .where({ studentId })
            .first();
        if (!estudentRow) {
            return null;
        }
        
        const gradesRows = await this.DB('grades')
            .where({ student_id: studentId });

        const grades = gradesRows.map(row => {
            new Grade({
                id: studentRow.id,
      name: studentRow.name,
      lastname: studentRow.lastname,
      grades
            })
        
        }

    }
}    
