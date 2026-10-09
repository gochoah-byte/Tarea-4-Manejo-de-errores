# Mini RRHH

Aplicación de gestión de empleados construida con React, TypeScript y Vite.

## Requisitos

- Node.js y npm

## Instalación y desarrollo

```sh
npm install
npm run dev
```

En una segunda terminal, inicia la API local de empleados:

```sh
npm run mock-api
```

El login utiliza la API g06 (`https://api-g06-39462701205.us-central1.run.app`). Puedes cambiar la URL base de autenticación con `VITE_API_BASE_URL`.

Los empleados, filtros, cambios y datos del dashboard usan JSON Server local en `http://localhost:3001`, con los registros de `db.json`. No se envían a la API g06.

## Comandos

- `npm run build`: comprueba TypeScript y genera la versión de producción.
- `npm run preview`: sirve localmente la versión generada.
- `npm run lint`: ejecuta ESLint.
