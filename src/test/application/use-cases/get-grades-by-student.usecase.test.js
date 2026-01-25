import { GetGradeByStudentUseCase } from '../../../application/use-case/grades/get-grade-by-student.usecase.js';
import { FackeGradeRepository } from '../../fakes/FackeGradeRepository.js';

describe('GetGradeByStudentUseCase', () => {
    test('should return student grades grouped correctly', async () => {
        const fakeRows = [
            {
                student_id: 1,
                student_name: 'Juan Perez',
                subject_name: 'Matemática',
                value: 90
            },
            {
                student_id: 1,
                student_name: 'Juan Perez',
                subject_name: 'Lengua',
                value: 80
            }
        ];
        const repository = new FackeGradeRepository(fakeRows);
        const useCase = new GetGradeByStudentUseCase(repository);

        const result = await useCase.execute(1);

        expect(result.student).toEqual({
            id: 1,
            name: 'Juan Perez'
        });

        expect(result.grades).toEqual([
            { subjectName: 'Matemática', value: 90 },
            { subjectName: 'Lengua', value: 80 }
        ]);


    });

    test('should throw error when student has no grades', async () => {
        const repository = new FackeGradeRepository([]);
        const useCase = new GetGradeByStudentUseCase(repository);

        await expect(useCase.execute(99))
            .rejects
            .toThrow('Student has no grades or does not exist');
    });
});