 
 export class AddGradeHandler {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;   
    }

    async execute(command) {

        // Traer agregate
        const student = await this.studentRepository.getById(command.studentId);

        if (!student) {
            throw new Error('Student not found');
        }

        // ejecutar logica de dominio
        const result = student.addGrade(command.subject, command.value);

        if (result.failure){
            throw result.error;
        }

        // persistir agregate completo
        await this.studentRepository.save(student);

        return {
            message: 'Grade added successfully'
        }
    }
 }