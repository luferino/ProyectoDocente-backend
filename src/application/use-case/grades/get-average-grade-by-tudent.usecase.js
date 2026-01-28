export class GetAverageGradeByStudentUseCase {
    constructor(gradeRepository){
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId){
        const rows = (await this.gradeRepository.findByStudentId(studentId)) || [];

        if (rows.length === 0) {
            throw new Error('No grades found for the student');
        }

        const total = rows.reduce((sum, r) => sum + r.value, 0);
        const average = total / rows.length;

        return {
            student: {
                id: rows[0].student_id,
                name: rows[0].student_name,
            },
            average
        };
    }
}

