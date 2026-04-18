import { StudentRepository } from '../../../../student/domain/repositories/student.repository.js';
import { Result } from '../../../../../shared/result.js';

export class AddGradeHandler {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;   
    }

    async execute(command) {
        const student = await this.studentRepository.getById(command.studentId);

        if (!student) {
            throw new Error('Student not found');
        }

        const result = student.addGrade(command.subject, command.value);

        if (result.failure){
            throw result.error;
        }

        await this.studentRepository.save(student);

        return {
            message: 'Grade added successfully'
        }
    }
}