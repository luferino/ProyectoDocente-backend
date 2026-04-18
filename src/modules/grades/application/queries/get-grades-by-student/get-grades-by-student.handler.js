export class GetGradesByStudentHandler {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(query) {
        const rows = await this.gradeRepository.getGradesByStudentId(query.studentId);
        if (!rows.length) {
            throw new Error('Student has no grades');
        }
        return {
            student: {
                id: rows[0].student_id,
                name: rows[0].student_name
            },
            grades: rows.map(row => ({
                subject: row.subject,
                grade: row.grade
            }))
        };
    }
}