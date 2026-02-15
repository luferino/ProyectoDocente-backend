import { StudentHasNoGradesError } from '../../errors/student-has-not-grades.error.js';
import { AverageGradeResponseDTO } from '../../dtos/average-grade-response.dto.js';

export class GetAverageGradeByStudentUseCase {
    constructor(gradeRepository){
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId){

        const grades = await this.gradeRepository.findByStudentId(studentId);

        if (!grades.length) {
            throw new StudentHasNoGradesError();
        }

        const total = grades.reduce((sum, g) => sum + g.value, 0);
        const average = total / grades.length;

        return new AverageGradeResponseDTO({
            studentId: grades[0].student_id,
            studentName: grades[0].student_name,
            average
        });
    }
}

