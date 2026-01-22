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

El proyecto sigue una arquitectura por capas:

```
src/
├── application/
│   ├── dtos/
│   └── use-cases/
├── domain/
│   ├── entities/
│   └── repositories/
├── infrastructure/
│   ├── database/
│   └── repositories/
├── interfaces/
│   └── http/
│       ├── controllers/
│       └── routes/
└── index.js
```

### 📌 Capas

* **Domain**: reglas de negocio puras (entidades y contratos)
* **Application**: casos de uso y DTOs
* **Infrastructure**: base de datos y repositorios concretos
* **Interfaces**: controladores HTTP y rutas

---

## 📖 Casos de uso implementados

### ✔ Asignar nota a un alumno

* Relación alumno – materia – nota

### ✔ Obtener notas por alumno

* Devuelve información del alumno y sus notas
* Uso de DTO para lecturas complejas

Ejemplo de respuesta:

```json
{
  "student": {
    "id": 1,
    "name": "Juan Perez"
  },
  "grades": [
    { "subjectName": "Matemática", "value": 90 },
    { "subjectName": "Lengua", "value": 80 }
  ]
}
```

---

## 🧪 Testing

Se implementaron **tests unitarios de casos de uso**, sin dependencia de base de datos ni Express.

### 📂 Ubicación

```
src/test/application/use-cases/
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

## ⚙️ Configuración del proyecto

### 1️⃣ Instalar dependencias

```bash
pnpm install
```

### 2️⃣ Variables de entorno

Crear archivo `.env`:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### 3️⃣ Ejecutar la aplicación

```bash
pnpm run dev
```

---

## 🎯 Objetivos del proyecto

* Aplicar Clean Architecture en un backend real
* Demostrar buenas prácticas de testing
* Servir como proyecto demostrativo para entrevistas técnicas

---

## 📌 Próximas mejoras

* Promedio de notas por alumno
* Promedio por materia
* Manejo de errores de dominio tipados
* Tests de integración
* Autenticación y roles

---

## 👨‍💻 Autor

**Luis Fernando Benegas Bogado**
Ingeniero en Informática

Proyecto desarrollado con enfoque educativo y profesional.
