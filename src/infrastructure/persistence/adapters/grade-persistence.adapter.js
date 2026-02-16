import { Grade } from '../../../domain/entities/grade.entity.js';

export class GradePersistenceAdapter {

    static toDomain(row) {
        return new Grade({
            id: row.id,
            studentId: row.student_id,
            studentName: row.nombres,
            value: row.value
        });
    }

}
