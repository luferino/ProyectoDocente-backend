import { Router } from "express";
import { pool } from "../../../../shared/database/postgres/connection.js";
import { GradeRepositoryPostgres } from "../repositories/grade.pg.repository.js";
import { AssignGradeUseCase } from "../../application/use-case/assign-grade.usecase.js";
import { GradeController } from "../controllers/grade.controller.js";
import { GetGradeByStudentUseCase } from '../../application/use-case/get-grade-by-student.usecase.js';
import { GetAverageGradeByStudentUseCase } from '../../application/use-case/get-average-grade-by-student.usecase.js';
import { GetGradesByStudentHandler } from '../../application/queries/get-grades-by-student/get-grades-by-student.handler.js';
import { GetAverageGradeByStudentHandler } from '../../application/queries/get-grades-by-student/get-average-grade-by-student.handler.js';
import { AddGradeHandler } from '../../application/commands/add-grade/add-grade.handler.js';
import { StudentRepositoryPostgres } from '../../../student/infrastructure/repositories/student.pg.repository.js';

export const gradeRoutes = () => {
    const router = Router();

    const gradeRepository = new GradeRepositoryPostgres();
    const studentRepository = new StudentRepositoryPostgres();

    const assignUseCase = new AssignGradeUseCase(pool, gradeRepository);
    const getGradeByStudentUseCase = new GetGradeByStudentUseCase(gradeRepository);
    const getAverageGradeByStudentUseCase = new GetAverageGradeByStudentUseCase(gradeRepository);

    const getGradesByStudentHandler = new GetGradesByStudentHandler(gradeRepository);
    const getAverageGradeByStudentHandler = new GetAverageGradeByStudentHandler(gradeRepository);
    const addGradeHandler = new AddGradeHandler(studentRepository);

    const controller = new GradeController(
        assignUseCase,
        getGradesByStudentHandler,
        getAverageGradeByStudentHandler,
        addGradeHandler
    );

    router.post("/", controller.assign);
    router.get("/student/:studentId", controller.handle(controller.getByStudent));
    router.get("/student/:studentId/grades/average", controller.getAverageByStudent.bind(controller));
    router.post("/student/:studentId/grades", controller.addGrade.bind(controller));

    return router;
}