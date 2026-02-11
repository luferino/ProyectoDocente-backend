import { BaseController } from './Base.controller.js';
export class GradeController extends BaseController {
    constructor(assignGradeUseCase,getGradeByStudentUseCase, getAverageGradeByStudentUseCase) {
        super();
        this.assignGradeUseCase = assignGradeUseCase;
        this.assign = this.assign.bind(this);
        this.getByStudent = this.getByStudent.bind(this);
        this.getGradeByStudentUseCase = getGradeByStudentUseCase;
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

            
            const result = await this.getGradeByStudentUseCase.execute(studentId);

            res.json(result);
            
    }

    async getAverageByStudent(req, res) {
        try{
            const studentId = Number(req.params.id); 
            const result = await this.getAverageGradeByStudentUseCase.execute(studentId);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}