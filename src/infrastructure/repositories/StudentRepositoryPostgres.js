import { StudentRepository } from '../../domain/repositories/StudenRepository.js';
import { Student } from '../../domain/entities/Student.js';
import { Pool } from '../database/postgres.js';

export class StudentRepositoryPostgres extends StudentRepository {
    async create ({nombre, apellido, documento, tipo_documento, celular, email}) {
        const result = await Pool.query(
            'INSERT INTO students (nombre, apellido, documento, tipo_documento, celular, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id,nombre,apellido',
            [nombre, apellido, documento, tipo_documento, celular, email]
        );
        return new Student(result.rows[0]);
    }

    async findAll () {
        const result = await Pool.query('SELECT id, nombre, apellido, documento, tipo_documento, celular, email FROM students');
        return result.rows.map(row => new Student(row));
    }
}