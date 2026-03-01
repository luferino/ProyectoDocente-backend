import { BaseController } from './Base.controller.js';
import { gradeRsponseAdapter } from '../adapters/grade-response.adapter.js';
import { GetGradesByStudentQuery } from '../../../application/queries/get-grades-by-student/get-grades-by-student.query.js';

export class GradeController extends BaseController {
    constructor(assignGradeUseCase,getGradeByStudentHandle, getAverageGradeByStudentUseCase) {
        super();
        this.assignGradeUseCase = assignGradeUseCase;
        this.assign = this.assign.bind(this);
        this.getByStudent = this.getByStudent.bind(this);
        this.getGradeByStudentHandle = getGradeByStudentHandle;
        this.getAverageGradeByStudentUseCase = getAverageGradeByStudentUseCase;
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
       
            const {studentId} = req.params; 
            const result = await this.getAverageGradeByStudentUseCase.execute(studentId);

            const response = gradeRsponseAdapter.toHttp(result);

            res.status(response.status).json(response.body);
        
    }
}