import { gradeRsponseAdapter } from '../adapters/grade-response.adapter.js';

export class GetAverageGradeByStudentController {
    constructor(getAverageGradeByStudentUseCase) {
        this.UseCase = getAverageGradeByStudentUseCase;
    }

    async execute(req, res) {
        const { studentId } = req.params;

        const result = await this.UseCase.execute({ studentId });

        const response = gradeRsponseAdapter.toHttp(result);

        res.status(200).json(response);
    }
}