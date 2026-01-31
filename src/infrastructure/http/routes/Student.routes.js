import { Router } from 'express';
import {StudentController} from '../controllers/Student.Controller.js';
import { StudentRepositoryPostgres } from '../../repositories/student.pg.repository.js';
import { CreateStudentUseCase } from '../../../application/use-case/students/create-students.usecase.js';
import { ListStudentsUseCase } from '../../../application/use-case/students/list-students.usecase.js';

export const studentRoutes = () => {

    const router = Router();
    const studentRepository = new StudentRepositoryPostgres();
    const createStudentUseCase = new CreateStudentUseCase(studentRepository);
    const listStudentsUseCase = new ListStudentsUseCase(studentRepository);
    const studentController = new StudentController(createStudentUseCase, listStudentsUseCase);

    router.post('/', studentController.create);
    router.get('/', studentController.list);

    return router;
};