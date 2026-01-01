export class Student {
    constructor ({id, nombre, apellido, documento, tipo_documento, celular, email}) {
        if (!nombre || !email) throw new Error('Name and email are required');
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.tipo_documento = tipo_documento;
        this.celular = celular;
        this.email = email;
    }
}