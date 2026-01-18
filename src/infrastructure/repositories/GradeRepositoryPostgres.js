import { GradeRepository } from '../../domain/repositories/GradeRepository.js';
import { Grade } from '../../domain/entities/Grades.js';
import { pool } from '../database/postgres/connection.js';

export class GradeRepositoryPostgres extends GradeRepository {
    async assign({ studentId, subjectId, value }, client) {
        const result = await pool.query(
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

    async findByStudentId(studentId) {
        const result = await pool.query(
            `
    SELECT 
      s.id AS student_id,
      s.nombres AS student_name,
      sub.nombre AS subject_name,
      g.value
    FROM notas g
    JOIN estudiantes s ON s.id = g.student_id
    JOIN materias sub ON sub.id = g.materia_id
    WHERE s.id = $1
    ORDER BY sub.nombre
    `,
            [studentId]
        );
    }
}