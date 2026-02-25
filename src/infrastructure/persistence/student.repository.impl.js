import { Student } from '../../domain/entities/Students.js';
import { Grade } from '../../domain/entities/grade.entity.js';
import { GradeValue } from '../../domain//value-objects/grade-value.vo.js';

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
                subject: row.subject_name,
                value: new GradeValue(row.value)
            })
        });

        return new Student({
            id: estudentRow.studentId,
            name: estudentRow.name,
            grades
        });
    }
    
    async save(student) {
        await this.DB('students')
            .where({ studentId: student.id })
            .update({
                name: student.name,
                lastname: student.lastname
            });
            
        // Estrategia simple: borrar y reinsertar
        await this.DB('grades')
            .where({ student_id: student.id })
            .del();
        
        for (const grade of student.grades) {
            await this.DB('grades').insert({
                student_id: student.id,
                subject_name: grade.subject,
                value: grade.value.value
            });
        };
    }

}   

