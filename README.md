# Aplicación Full Stack con React, Node.js, Express y Firebase

Se usó Firebase Functions para el despliegue del Back End y Firestore Database para almacenar los datos. Para el diseño, implementa Tailwind CSS.

## Contenido

- [Funcionalidad (Front End)](#funcionalidad-front-end)
- [Funcionalidad (Back End)](#funcionalidad-back-end)
  - [1. Obtener todos los candidatos](#1-obtener-todos-los-candidatos)
  - [2. Obtener información de un candidato por su ID](#2-obtener-información-de-un-candidato-por-su-id)
  - [3. Crear un nuevo candidato](#3-crear-un-nuevo-candidato)
  - [4. Editar un candidato dado por su ID](#4-editar-un-candidato-dado-por-su-id)

## Funcionalidad (Front End)

La aplicación muestra una lista de candidatos en la página principal. Cada candidato tiene un card con información básica, incluyendo nombre y fecha de entrevista.

![Listado de candidatos](/imgs/listado.png)

Al hacer clic en el botón "Ver detalles", se abrirá una ventana modal que mostrará la misma información básica (nombre y fecha de entrevista) y las habilidades del candidato.

Puedes agregar o eliminar habilidades. Cuando exista alguna modificación en las habilidades aparecerán los botones para descartar los cambios o guardarlos. Este último guardará los cambios en la base de datos.

![Información del candidato](./imgs/modal.png)

## Funcionalidad (Back End)

El Back End está realizado en Node.js con el framework Express, utilizando Firebase Functions y Firestore Database.

La API proporciona servicios para gestionar la información de los candidatos.

### Endpoints

A continuación, se describen los diferentes endpoints a partir de la URL base.

**URL base:** https://us-central1-practica-web-full-stack.cloudfunctions.net/app/api

### 1. Obtener todos los candidatos

- **URL:** `/candidatos`
- **Método HTTP:** GET
- **Descripción:** Obtiene la lista de todos los candidatos registrados en la base de datos.

### 2. Obtener información de un candidato por su ID

- **URL:** `/candidato/:id`
- **Método HTTP:** GET
- **Descripción:** Obtiene la información detallada de un candidato específico utilizando su ID.

### 3. Crear un nuevo candidato

- **URL:** `/candidatos/crear`
- **Método HTTP:** POST
- **Descripción:** Crea un nuevo candidato. Se requiere proporcionar en el cuerpo (body) de la solicitud los siguientes datos:
  - `nombre: string`: Nombre del candidato.
  - `habilidades: string[]`: Listado de tecnologías.

### 4. Editar un candidato dado por su ID

- **URL:** `/candidato/:id/editar`
- **Método HTTP:** PUT
- **Descripción:** Edita la información de un candidato específico utilizando su ID. Se requiere proporcionar en el cuerpo (body) de la solicitud los siguientes datos:
  - `nombre: string`: Nombre del candidato.
  - `habilidades: string[]`: Listado de tecnologías.
  - `fecha_entrevista: object`: Objeto `timestamp`.
    - `fecha_entrevista._seconds: number`
    - `fecha_entrevista._nanoseconds: number`
