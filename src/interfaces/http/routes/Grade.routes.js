import { Router } from "express";
import { pool } from "../../../infrastructure/database/postgres/connection.js";
import { GradeRepositoryPostgres } from "../../../infrastructure/repositories/GradeRepositoryPostgres.js";
import { AssignGradeUseCase } from "../../../aplication/use-case/grades/assing-grade.usecase.js";
import { GradeController } from "../controllers/Grade.Controller.js";

export const gradeRoutes = () => {
    const router = Router();

    const repository = new GradeRepositoryPostgres();
    const useCase = new AssignGradeUseCase(pool, repository);
    const controller = new GradeController(useCase);

    router.post("/", controller.assign);

    return router;
}