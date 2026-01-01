export class ListStudentsUseCase {
    constructor (studentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute () {
        return await this.studentRepository.findAll();
    }  
}
