export class GradeController {
    constructor(assignGradeUseCase,getGradeByStudentUseCase, getAverageGradeByStudentUseCase) {
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
        try {
            const { studentId } = req.params;

            if (Number.isNaN(studentId)) {
                return res.status(400).json({ error: 'Invalid student id' });
            }

            const result = await this.getGradeByStudentUseCase.execute(
                Number(studentId)
            );
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getAverageByStudent = async (req, res) => {
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