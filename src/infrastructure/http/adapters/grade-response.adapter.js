export class gradeRsponseAdapter {
    static toHttp(result){
        return {
            student: {
                id: result.id,
                name: result.nombres,
                lastname: result.apellidos
            },
            average: result.average,
            grades: result.grades.map(g => ({
                subject: g.materia,
                grade: g.value
            }))
        }
    }
}