import { GradeController } from '../controllers/Grade.Controller.js';
import { GetGradeByStudentUseCase } from '../../../application/use-case/grades/get-grade-by-student.usecase.js';
import { GetAverageGradeByStudentUseCase } from '../../application/use-case/grades/get-average-grade-by-student.usecase.js';
import { GradeRepository } from '../repository/grade.repository.js';

export const buildGradeModule = () => {
    const repository = new GradeRepository();

    const getGradesByStudent = new GetGradeByStudentUseCase(repository);
    const getAverageByStudent = new GetAverageGradeByStudentUseCase(repository);

    return new GradeController(
        getGradesByStudent,
        getAverageByStudent
    );
};