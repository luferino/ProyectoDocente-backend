import { BaseController } from './base.controller.js';
import { ErrorResponseAdapter } from '../../../../shared/http/adapters/error-response.adapter.js';
import { GetGradesByStudentQuery } from '../../application/queries/get-grades-by-student/get-grades-by-student.query.js';
import { GetAverageGradeByStudentQuery } from '../../application/queries/get-grades-by-student/get-average-grade-by-student.query.js';
import { AddGradeCommand } from '../../application/commands/add-grade/add-grade.command.js';
import { AddGradeHandler } from '../../application/commands/add-grade/add-grade.handler.js';

export class GradeController extends BaseController {
    constructor(assignGradeUseCase, getGradeByStudentHandler, getAverageGradeByStudentHandler, addGradeHandler) {
        super();
        this.assignGradeUseCase = assignGradeUseCase;
        this.getGradeByStudentHandler = getGradeByStudentHandler;
        this.getAverageGradeByStudentHandler = getAverageGradeByStudentHandler;
        this.addGradeHandler = addGradeHandler;
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
        const result = await this.getGradeByStudentHandler.execute(query);
        res.json(result);
    }

    async getAverageByStudent(req, res) {
        try {
            const studentId = req.params.studentId;
            const query = new GetAverageGradeByStudentQuery(studentId);
            const result = await this.getAverageGradeByStudentHandler.execute(query);
            res.json(result);
        } catch (error) {
            const httpError = ErrorResponseAdapter.toHttp(error);
            res.status(httpError.status).json(httpError.body);
        }
    }

    async addGrade(req, res) {
        try {
            const studentId = parseInt(req.params.studentId);
            const { subject, value } = req.body;
            const command = new AddGradeCommand(studentId, subject, value);
            const result = await this.addGradeHandler.execute(command);
            res.status(201).json(result);
        } catch (error) {
            const httpError = ErrorResponseAdapter.toHttp(error);
            res.status(httpError.status).json(httpError.body);
        }
    }
}