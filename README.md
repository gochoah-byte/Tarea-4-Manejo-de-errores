# Mini RRHH

Aplicación de gestión de empleados construida con React, TypeScript y Vite.

## Requisitos

- Node.js y npm

## Instalación y desarrollo

```sh
npm install
npm run dev
```

Para ejecutar el servidor de datos de prueba en otra terminal:

```sh
npm run mock-api
```

La autenticación utiliza la API g06. Puedes cambiar su URL base con `VITE_API_BASE_URL`; por defecto usa `https://api-g06-39462701205.us-central1.run.app`.

El módulo de empleados todavía usa JSON Server local en `http://localhost:3001`. Esa integración no se cambia solo sustituyendo la URL: la API g06 usa rutas `/api/v1/employees`, paginación y un modelo de empleado distintos. Hay que adaptar esos campos y respuestas antes de conectar ese módulo.

## Comandos

- `npm run build`: comprueba TypeScript y genera la versión de producción.
- `npm run preview`: sirve localmente la versión generada.
- `npm run lint`: ejecuta ESLint.
