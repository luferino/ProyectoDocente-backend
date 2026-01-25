
export class GetAverageGradeByStudentUseCase {
    constructor(gradeRepository){
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId){
        const row = (await this.gradeRepository.getAverageGradeByStudent(studentId)) || [];

        if (row.length === 0) {
            throw new Error('No grades found for the student');
        }

        const total = row.reduce((sum, r) => sum + r.value, 0);
        const average = total / row.length;

        return {
            student: {
                id: rows[0].studentId,
                name: rows[0].studen_name,
            },
            average
        };
    }
}

