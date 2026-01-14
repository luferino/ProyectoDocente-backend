import { StudentGradesDTO } from '../../dtos/StudentGradesDTO.js';

export class GetGradeByStudentUseCase {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId) {
        const rows = await this.gradeRepository.findByStudentId(studentId);

        if (rows.length === 0) {
            throw new Error('Student has no grades or does not exis');
        }

        const student = {
            id: rows[0].student_id,
            name: rows[0].student_name,
        }

        const grade = rows.map(row => ({
            subjectName: row.subject_name,
            value: row.value,
        }));

        return new StudentGradesDTO(student, grade);
    }
}