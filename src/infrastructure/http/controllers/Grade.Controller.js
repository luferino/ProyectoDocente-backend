import { BaseController } from './Base.controller.js';
import {ErrorResponseAdapter} from '../adapters/error-response.adapter.js';
import { GetGradesByStudentQuery } from '../../../application/queries/get-grades-by-student/get-grades-by-student.query.js';
import {GetAverageGradeByStudentQuery} from '../../../application/queries/get-grades-by-student/get-average-grade-by-student.query.js';
import {AddGradeHandler} from '../../../application/commands/add-grade/add-grade.command.js';

export class GradeController extends BaseController {
    constructor(assignGradeUseCase,getGradeByStudentHandle, getAverageGradeByStudentUseCase, getAverageByStudentHandle) {
        super();
        this.assignGradeUseCase = assignGradeUseCase;
        this.assign = this.assign.bind(this);
        this.getByStudent = this.getByStudent.bind(this);
        this.getGradeByStudentHandle = getGradeByStudentHandle;
        this.getAverageGradeByStudentUseCase = getAverageGradeByStudentUseCase;
        this.getAverageByStudentHandle = getAverageByStudentHandle;
        this.AddGradeHandler = addGradeHandler;
    }

    async assign(req, res) {
        try {
            const grade = await this.assignGradeUseCase.execute(req.body);
            res.status(201).json(grade);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getByStudent(req, res) {
            const { studentId } = req.params;

            const query = new GetGradesByStudentQuery(studentId);
            
            const result = await this.getGradeByStudentHandle.execute(query);
            res.json(result);
            
    }

    async getAverageByStudent(req, res) {

        try {
            const studentId = req.params.studentId;

            const query = new GetAverageGradeByStudentQuery(studentId);

            const result = await this.getAverageByStudentHandle.execute(query);

            res.json(result);
        } catch (error) {
            const httpError = ErrorResponseAdapter.toHttp(error);

            res.status(httpError.status).json(httpError.body);
        }
       
            /*const {studentId} = req.params; 
            const result = await this.getAverageGradeByStudentUseCase.execute(studentId);

            const response = gradeRsponseAdapter.toHttp(result);

            res.status(response.status).json(response.body);*/
        
    }
    async addGrade(req, res) {
        try {
            const studentId = parseInt(req.params.studentId);
            const { subject, value } = req.body;
            
            const command = new AddGradeHandler(studentId, subject, value);

            const result = await this.addGradeHandler.execute(command);
            
            res.status(201).json(result);
        } catch (error) {
            const httpError = ErrorResponseAdapter.toHttp(error);
            res.status(httpError.status).json(httpError.body);
        }
    }
}