export class GradeController {
    constructor(assignGradeUseCase) {
        this.assignGradeUseCase = assignGradeUseCase;
        this.assign = this.assign.bind(this);
    }

    async assign(req, res) {
        try {
            const grade = await this.assignGradeUseCase.execute(req.body);
            res.status(201).json(grade);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}