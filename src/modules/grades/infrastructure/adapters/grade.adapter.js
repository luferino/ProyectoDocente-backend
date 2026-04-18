import { Grade } from '../../../grades/domain/entities/grade.entity.js';

export class GradeAdapter {
    static toDomain(row) {
        return new Grade({
                id: row.id,
                studentId: row.student_id,
                studentName: row.nombres + ' ' + row.apellidos,
                subjectName: row.materia,
                value: row.value
        });
    }
}