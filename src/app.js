import express from 'express';
import { corsMiddleware } from './config/cors.js';
import { studentRoutes } from './modules/student/infrastructure/routes/student.routes.js';
import { gradeRoutes } from './modules/grades/infrastructure/routes/grade.routes.js';
import { errorMiddleware } from './shared/http/middlewares/error.middleware.js';

export function createApp() {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  
  app.use('/students', studentRoutes());
  app.use('/grades', gradeRoutes());

  app.use(errorMiddleware);

  return app;
}