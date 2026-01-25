import { defaults } from 'pg';
import {GetGradeByStudentUseCase} from '../../../application/use-case/grades/get-grade-by-student.usecase.js';
import { FacekGradeRepository } from '../../fakes/FackeGradeRepository.js';

describe('GetAverageGradeByStudentUseCase', () => {

    test('should return average grade for a student', async () => {
        const repository = new FacekGradeRepository([
            {
                student_id: 1,
                student_name: 'Juan Perez',
                value: 90
            },
            {
                student_id: 1,
                student_name: 'Juan Perez',
                value: 80
            }
        ]);
        const useCase = new GetGradeByStudentUseCase(repository);
        const result = await useCase.execute(1);
        expect(result.student).toEqual({
                id: 1,
                name: 'Juan Perez'
            });

        expect(result.average).toBe(85);
    });
    test('should throw error when student has no grades', async () => {
        const repository = new FacekGradeRepository([]);
        const useCase = new GetGradeByStudentUseCase(repository);

        await expect(useCase.execute(99))
            .rejects
            .toThrow('Student has no grades or does not exist');
    });
});