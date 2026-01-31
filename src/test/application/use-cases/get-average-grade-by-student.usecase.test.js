
import { GetAverageGradeByStudentUseCase } from '../../../application/use-case/grades/get-average-grade-by-tudent.usecase.js';
import { FackeGradeRepository } from '../../fakes/FackeGradeRepository.js';

describe('GetAverageGradeByStudentUseCase', () => {

    test('should return average grade for a student', async () => {
        const repository = new FackeGradeRepository([
            {
                student:{ id: 1, nombres: 'Juan Perez', apellidos: 'Gomez' },  
                materia: 'Matematicas',
                value: 90
            },
            {
                student:{ id: 2, nombres: 'Juan Perez', apellidos: 'Gomez' },  
                materia: 'Ciencias',
                value: 80
            }
        ]);
        const useCase = new GetAverageGradeByStudentUseCase(repository);
        const result = await useCase.execute(1);
        expect(result.student).toEqual({
                id: 1,
                name: 'Juan Perez',
                lastname: 'Gomez'       
            });

        expect(result.average).toBe(85);
    });
    test('should throw error when student has no grades', async () => {
        const repository = new FackeGradeRepository([]);
        const useCase = new GetAverageGradeByStudentUseCase(repository);

        await expect(useCase.execute(99))
            .rejects
            .toThrow('No grades found for the student');
    });
});