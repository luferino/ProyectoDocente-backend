import { GradeRepository } from '../../domain/repositories/GradeRepository.js';
import { Grade } from '../../domain/entities/Grades.js';

export class GradeRepositoryPostgres extends GradeRepository {
    async assign({ studentId, subjectId, value }, client) {
        const result = await client.query(
            'INSERT INTO notas (student_id, materia_id, value) VALUES ($1, $2, $3) RETURNING id, student_id, materia_id, value',
            [studentId, subjectId, value]
        );

        const row = result.rows[0];
        return new Grade({
            id: row.id,
            studentId: row.student_id,
            subjectId: row.materia_id,
            value: row.value
        });
    }
}