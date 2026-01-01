import express from 'express';
import { studentRoutes } from './interfaces/http/routes/Student.routes.js';



export function createApp() {
  const app = express(); 

  app.use(express.json());

  app.use('/students', studentRoutes());

  return app;
}