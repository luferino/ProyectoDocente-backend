export class StudentController {
    constructor (createStudentUseCase, listStudentsUseCase) {
        this.createStudentUseCase = createStudentUseCase;
        this.listStudentsUseCase = listStudentsUseCase;
    }

    create = async (req, res) => {
        try {
            const student = await this.createStudentUseCase.execute(req.body);
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    

    list = async (req, res) => {
        try {
            const students = await this.listStudentsUseCase.execute();
            res.json(students);
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    };
}