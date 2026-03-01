import {GetGradesByStudentHandler} from '../../application/queries/get-grades-by-student/get-grades-by-student.handler.js';
import {GradeRepository} from '../../domain/repositories/GradeRepository.js';

const gradeRepository = new GradeRepository();

const getGradeByStudentHandle = new GetGradesByStudentHandler(gradeRepository);

export const dependencies = {
    gradeController: new GradeController({
        getGradeByStudentHandle
    })
}