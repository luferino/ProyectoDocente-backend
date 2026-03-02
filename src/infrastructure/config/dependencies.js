import {GetGradesByStudentHandler} from '../../application/queries/get-grades-by-student/get-grades-by-student.handler.js';
import {GradeRepository} from '../../domain/repositories/GradeRepository.js';
import {GetAverageGradeByStudentHandler} from '../../application/queries/get-grades-by-student/get-average-grade-by-student.handler.js';

const gradeRepository = new GradeRepository();

const getGradeByStudentHandle = new GetGradesByStudentHandler(gradeRepository);
const getAverageGradeByStudentHandle = new GetAverageGradeByStudentHandler(gradeRepository);

export const dependencies = {
    gradeController: new GradeController({
        getGradeByStudentHandle,
        getAverageGradeByStudentHandle
    })
}