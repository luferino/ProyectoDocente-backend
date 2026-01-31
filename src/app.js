import express from 'express';
import { studentRoutes } from './infrastructure/http/routes/Student.routes.js';
import { gradeRoutes } from './infrastructure/http/routes/Grade.routes.js';
import { buildGradeModule } from './infrastructure/http/modules/grade.modules.js';

export function createApp() {
  const app = express();
  const gradeController = buildGradeModule();

  app.use(express.json());

  app.use('/students', studentRoutes());
  app.use('/grades', gradeRoutes());
  app.use('/api/grades', gradeRoutes(gradeController));

  return app;
}