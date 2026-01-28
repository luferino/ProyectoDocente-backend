import express from 'express';
import { studentRoutes } from './interfaces/http/routes/Student.routes.js';
import { gradeRoutes } from './interfaces/http/routes/Grade.routes.js';
import { buildGradeModule } from './interfaces/http/modules/grade.modules.js';

export function createApp() {
  const app = express();
  const gradeController = buildGradeModule();

  app.use(express.json());

  app.use('/students', studentRoutes());
  app.use('/grades', gradeRoutes());

  return app;
}