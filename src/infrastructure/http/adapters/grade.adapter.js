// infrastructure/http/adapters/grade.adapter.js
export class GradeAdapter {
    static toDomain(row) {
        return {
            student: {
                id: row.student_id,
                name: row.student_name
            },
            subject: row.subject_name,
            value: row.value
        };
    }
}
