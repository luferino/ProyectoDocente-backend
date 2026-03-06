import {GetGradesByStudentHandler} from '../../application/queries/get-grades-by-student/get-grades-by-student.handler.js';
import {GradeRepository} from '../../domain/repositories/GradeRepository.js';
import {GetAverageGradeByStudentHandler} from '../../application/queries/get-grades-by-student/get-average-grade-by-student.handler.js';
import {AddGradeHandler} from '../../application/commands/add-grade/add-grade.handler.js';

const gradeRepository = new GradeRepository();

const getGradeByStudentHandle = new GetGradesByStudentHandler(gradeRepository);
const getAverageGradeByStudentHandle = new GetAverageGradeByStudentHandler(gradeRepository);
const addGradeHandler = new AddGradeHandler(gradeRepository);
    
export const dependencies = {
    gradeController: new GradeController({
        getGradeByStudentHandle,
        getAverageGradeByStudentHandle,
        addGradeHandler
    })
}