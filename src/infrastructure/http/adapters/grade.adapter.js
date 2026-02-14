// infrastructure/http/adapters/grade.adapter.js
export class GradeAdapter {
    static toDomain(row) {
        return {
            student: {
                id: row.id,
                name: row.nombres,
                lastname: row.apellidos
            },
            subject: row.materia,
            value: row.value
        };
    }
}
