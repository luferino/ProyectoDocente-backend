import { StudentHasNoGradesError } from '../../errors/student-has-not-grades.error.js';

export class GetAverageGradeByStudentHandler {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(query) {

        const rows = await this.gradeRepository.getGradesByStudentId(query.studentId);

        if (!rows.length) {
            throw new StudentHasNoGradesError();
        }

        const student = {
            id: rows[0].student_id,
            name: rows[0].student_name
        }

        const total = rows.reduce((sum, row) => sum + row.grade, 0);

        const average = total / rows.length;

        return {
            student,
            average
        }
    }
}