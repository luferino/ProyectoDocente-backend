import { StudentGradesDTO } from '../../dtos/StudentGradesDTO.js';

export class GetGradeByStudentUseCase {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    async execute(studentId) {
        const grades = await this.gradeRepository.findByStudentId(studentId);

        if (!grades.length) {
            throw new Error('Student has no grades or does not exist');
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