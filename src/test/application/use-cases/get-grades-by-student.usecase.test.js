import { GetGradeByStudentUseCase } from '../../../application/use-case/grades/get-grade-by-student.usecase.js';
import { FacekGradeRepository } from '../../fakes/FackeGradeRepository.js';

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
        const repository = new FacekGradeRepository(fakeRows);
        const useCase = new GetGradeByStudentUseCase(repository); 

        const result = await useCase.execute(1);

        expect (result).toEqual([
            { subjectName: 'Matemática', value: 90 },
  { subjectName: 'Lengua', value: 80 }
        ]);

        expect(result.grades).toHaveLength(2);
        expect(result.grades[0]).toEqual({
            subject: 'Matemática',
            value: 90
        }); 
    });

    test('should throw error when student has no grades', async () => {
        const repository = new FacekGradeRepository([]);
        const useCase = new GetGradeByStudentUseCase(repository);

        await expect(useCase.execute(99))
        .rejects
        .toThrow('Student has no grades or does not exist');
    });
});