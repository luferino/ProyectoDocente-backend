import { Router } from "express";
import { pool } from "../../../infrastructure/database/postgres/connection.js";
import { GradeRepositoryPostgres } from "../../../infrastructure/repositories/GradeRepositoryPostgres.js";
import { AssignGradeUseCase } from "../../../aplication/use-case/grades/assing-grade.usecase.js";
import { GradeController } from "../controllers/Grade.Controller.js";
import { GetGradeByStudentUseCase } from '../../../aplication/use-case/grades/get-grade-by-student.usecase.js';

export const gradeRoutes = () => {
    const router = Router();

    const repository = new GradeRepositoryPostgres();
    const assingUseCase = new AssignGradeUseCase(pool, repository);
    const getGradeByStudentUseCase = new GetGradeByStudentUseCase(repository);
    const controller = new GradeController(assingUseCase, getGradeByStudentUseCase);

    router.post("/", controller.assign);
    router.get("/student/:studentId", controller.getByStudent);

    return router;
}