import { StudentHasNoGradesError } from '../../errors/student-has-not-grades.error.js';

export class GetGradesByStudentHandler {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(query) {
        const rows = await this.gradeRepository.getGradesByStudentId(query.studentId);
        if (!rows.length) {
            throw new StudentHasNoGradesError(query.studentId);
        }
        return {
            student:{
                id: rows[0].student_id,
                name: rows[0].student_name
            },
            grades: rows.map(row => ({
                subject: row.subject,
                grade: row.grade
            }))
            
            }
        };
    }