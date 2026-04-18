import { GradeValue } from '../../../grades/domain/value-objects/grade-value.vo.js';
import { Result } from '../../../../shared/result.js';

export class Student {
    constructor ({id, nombres, apellidos, documento, tipo_documento, celular, email, edad, fecha_nacimiento, grades = []}
    ) {
        if (!nombres || !email) throw new Error('Name and email are required');
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.documento = documento;
        this.tipo_documento = tipo_documento;
        this.celular = celular;
        this.email = email;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this._grades = grades;
    }

    addGrade(subject, value) {
        const gradeOrError = GradeValue.create(value);
        if (gradeOrError.isFailure) {
            return gradeOrError;
        }
        
        this._grades.push({
            subject,
            value: gradeOrError.value
        });
        
        return Result.ok(this);
    }

    get grades() {
        return this._grades;
    }
}