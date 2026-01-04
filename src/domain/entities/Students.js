export class Student {
    constructor ({id, nombres, apellidos, documento, tipo_documento, celular, email, edad, fecha_nacimiento}
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
    }
}