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

## Despliegue

### API de empleados en Render

Puedes crear un servicio **Web Service** desde este repositorio en Render para publicar el mock de JSON Server:

- **Build Command:** `npm install`
- **Start Command:** `npx json-server --watch db.json --host 0.0.0.0 --port $PORT`

Render asigna una URL pública al servicio, por ejemplo `https://mini-rrhh-api.onrender.com`. Esta API mock guarda los cambios en `db.json`; el almacenamiento local de un servicio web puede ser efímero. Úsala para demos, no como almacenamiento de producción.

### Interfaz en Vercel

Importa el repositorio en Vercel como proyecto **Vite**:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- En **Settings → Environment Variables**, agrega `VITE_EMPLOYEE_API_URL` con la URL raíz de tu servicio Render, sin `/employees` al final.
- Si necesitas cambiar el servicio de autenticación, configura también `VITE_API_BASE_URL`. Si no, se usa la URL g06 predeterminada.
- Aplica las variables a los entornos que uses (**Production**, **Preview** y/o **Development**) y vuelve a desplegar.

El archivo `vercel.json` redirige las rutas de la aplicación a `index.html`, para que React Router pueda mostrar la página 404 propia incluso al abrir una ruta directamente.

## Comandos

- `npm run build`: comprueba TypeScript y genera la versión de producción.
- `npm run preview`: sirve localmente la versión generada.
- `npm run lint`: ejecuta ESLint.
