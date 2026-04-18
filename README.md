# 📚 Sistema de Gestión de Notas de Alumnos

Backend desarrollado en **Node.js** aplicando principios de **Clean Architecture** y **Clean Code**, con persistencia en **PostgreSQL** y cobertura de **tests unitarios**.

Este proyecto fue diseñado con un enfoque profesional, priorizando:

* separación de responsabilidades
* facilidad de testeo
* escalabilidad
* mantenibilidad

---

## 🚀 Tecnologías utilizadas

* **Node.js** (ES Modules)
* **Express**
* **PostgreSQL**
* **Jest** (tests unitarios)
* Arquitectura limpia (Clean Architecture)

---

## 🧱 Arquitectura

El proyecto sigue una arquitectura **modular** basada en **Clean Architecture**:

```
src/
├── modules/
│   ├── student/           # Módulo de estudiantes
│   │   ├── domain/        # entidades, repositorios (interfaces)
│   │   ├── application/   # use-cases, dtos, errors
│   │   └── infrastructure/ # controladores, rutas, repositorios impl
│   ├── grades/            # Módulo de notas
│   │   ├── domain/        # entidades, repositorios, value-objects, errors
│   │   ├── application/   # use-cases, queries, commands, dtos
│   │   └── infrastructure/ # controladores, rutas, repositorios, adapters
│   └── subject/           # Módulo de materias (en desarrollo)
├── shared/                # Utilidades compartidas
│   ├── database/          # conexión a PostgreSQL
│   ├── http/              # adapters, errors, middlewares
│   └── result.js          # clase Result para manejo de errores
├── config/
├── app.js                 # configuración de Express
└── index.js              # punto de entrada
```

### 📌 Capas por módulo

* **Domain**: reglas de negocio puras (entidades, repositorios, value objects)
* **Application**: casos de uso, commands, queries, dtos
* **Infrastructure**: controladores HTTP, rutas, repositorios concretos

---

## 📖 Casos de uso implementados

### ✔ Gestionar estudiantes
* Crear estudiante
* Listar todos los estudiantes

### ✔ Asignar nota a un alumno

* Relación alumno – materia – nota

### ✔ Obtener notas por alumno

* Devuelve información del alumno y sus notas

### ✔ Obtener promedio de notas por alumno

* Calcula el promedio de las notas de un estudiante

Ejemplo de respuesta:

```json
{
  "student": {
    "id": 1,
    "name": "Juan Perez"
  },
  "grades": [
    { "subject": "Matemática", "grade": 4.5 },
    { "subject": "Lengua", "grade": 3.8 }
  ]
}
```

---

## 🧪 Testing

Se implementaron **tests unitarios de casos de uso**, sin dependencia de base de datos ni Express.

### 📂 Ubicación

```
src/test/
```

### 🧠 Enfoque

* Repositorios falsos (Fake Repository)
* Tests de lógica pura
* Inyección de dependencias

### ▶ Ejecutar tests

```bash
pnpm test
```

---

## 🎯 Objetivos del proyecto

* Aplicar Clean Architecture en un backend real
* Demostrar arquitectura modular escalable
* Facilitar mantenimiento y testing
* Servir como proyecto demostrativo para entrevistas técnicas

---

## 📌 Próximas mejoras

* CRUD completo de materias (subject module)
* Tests de integración
* Autenticación y roles
* Documentación con Swagger

---

## 👨‍💻 Autor

**Luis Fernando Benegas Bogado**
Ingeniero en Informática

Proyecto desarrollado con enfoque educativo y profesional.
