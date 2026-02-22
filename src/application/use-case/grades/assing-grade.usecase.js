import { GradeValue } from '../../../domain/value-objects/grade-value.vo.js';

export class AssignGradeUseCase {
    constructor(pool, gradeRepository) {
        this.pool = pool;
        this.gradeRepository = gradeRepository;
    }

    async execute({ studentId, subjectId, value }) { 
        const gradeValue = new GradeValue(value);

        const client = await this.pool.connect();

        try {
            await client.query('BEGIN');

            // Validar alumno 
            const student = await client.query(
                'SELECT id FROM estudiantes WHERE id = $1',
                [studentId]
            );
            if (student.rowCount === 0) {
                throw new Error('Student not found');
            }

            // Insertar nota
            const grade = await this.gradeRepository.assign(
                {
                    studentId,
                    subjectId,
                    value: gradeValue.value
                },
                client
            );

            await client.query('COMMIT');
            return grade;

        }
        catch (error) {
            await client.query('ROLLBACK');
            throw error;
        }finally {
            client.release();
        }
    }
}