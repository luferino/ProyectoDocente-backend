export class GetGradeByStudentUseCase {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId) {
        const grades = await this.gradeRepository.findByStudentId(studentId);

        if (!grades.length) {
            throw new Error('Student has no grades');
        }

        return {
            student: grades[0].student,
            grades: grades.map(g => ({
                subjectName: g.subject,
                value: g.value,
            }))
        }
    }
}