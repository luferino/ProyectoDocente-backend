export class CreateStudentUseCase {
    constructor (studentRepository) {
        this.studentRepository = studentRepository;
    } 
    async execute (studentData) {
        return await this.studentRepository.create(studentData);
    }
}
