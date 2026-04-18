import { StudentRepository } from '../../domain/repositories/student.repository.js';
import { Student } from '../../domain/entities/student.entity.js';
import { pool } from '../../../../shared/database/postgres/connection.js';

export class StudentRepositoryPostgres extends StudentRepository {
    async create ({nombres, apellidos, documento, tipo_documento, celular, email, edad, fecha_nacimiento}) {
        const result = await pool.query(
            'INSERT INTO estudiantes (nombres, apellidos, documento, tipo_documento, celular, email, edad, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id,nombres,apellidos',   
            [nombres, apellidos, documento, tipo_documento, celular, email, edad, fecha_nacimiento] 
        );
        return new Student(result.rows[0]);
    }

    async findAll () {
        const result = await pool.query('SELECT id, nombres, apellidos, edad, documento, tipo_documento, celular, email FROM estudiantes');
        return result.rows.map(row => new Student(row));
    }

    async getById(studentId) {
        const result = await pool.query(
            'SELECT id, nombres, apellidos, documento, tipo_documento, celular, email, edad, fecha_nacimiento FROM estudiantes WHERE id = $1',
            [studentId]
        );
        if (result.rows.length === 0) return null;
        return new Student(result.rows[0]);
    }

    async save(student) {
        return student;
    }
}