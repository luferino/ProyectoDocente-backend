import { StudentGradesDTO } from '../../dtos/StudentGradesDTO.js';
import { StudentHasNoGradesError } from '../../errors/student-has-not-grades.error.js';

export class GetGradeByStudentUseCase {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId) {
        const grades = await this.gradeRepository.findByStudentId(studentId);

        if (!grades.length) {
            throw new StudentHasNoGradesError();
        }

        const student = grades[0].student;

        return {
            student,
            grades: grades.map(g => ({
                subjectName: g.subject,
                value: g.value,
            }))
        }
       /* const grade = grades.map(g => ({
            subjectName: g.subject,
            value: g.value,
        }));

        return new StudentGradesDTO(student, grade);*/
    }
}