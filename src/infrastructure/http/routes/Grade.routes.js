import { Router } from "express";
import { pool } from "../../../infrastructure/database/postgres/connection.js";
import { GradeRepositoryPostgres } from "../../../infrastructure/repositories/grade.pg.repository.js";
import { AssignGradeUseCase } from "../../../application/use-case/grades/assing-grade.usecase.js";
import { GradeController } from "../controllers/Grade.Controller.js";
import { GetGradeByStudentUseCase } from '../../../application/use-case/grades/get-grade-by-student.usecase.js';
import { GetAverageGradeByStudentUseCase } from '../../../application/use-case/grades/get-average-grade-by-tudent.usecase.js';

export const gradeRoutes = () => {
    const router = Router();

    const repository = new GradeRepositoryPostgres();
    const assingUseCase = new AssignGradeUseCase(pool, repository);
    const getGradeByStudentUseCase = new GetGradeByStudentUseCase(repository);
    const getAverageGradeByStudentUseCase = new GetAverageGradeByStudentUseCase(repository);
    const controller = new GradeController(assingUseCase, getGradeByStudentUseCase, getAverageGradeByStudentUseCase);

    router.post("/", controller.assign);
    router.get("/student/:studentId", controller.handle(controller.getByStudent));
    router.get("/student/:studentId/grades/average", controller.getAverageByStudent.bind(controller));

    return router;
}