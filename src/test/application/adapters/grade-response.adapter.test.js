import { gradeRsponseAdapter } from "../../../infrastructure/http/adapters/grade-response.adapter";

describe('GradeResponseAdapter', () => {
    it('should map domain result to http response', () => {
        const domainResult = {
            student: {
                id: 1,
                name: 'Juan'},
            average: 85,
            grades: [
                { subjectName: 'Matemáticas', value: 90 },
                { subjectName: 'Ciencias', value: 80 }
            ]
        };

        const response = gradeRsponseAdapter.toHttp(domainResult);

        expect(response).toEqual({
            student: {
                id: 1,
                name: 'Juan'}
            ,
            average: 85,
            grades: [
                { subjectName: 'Matemáticas', value: 90 },
                { subjectName: 'Ciencias', value: 80 }
            ]
        });
    });
});