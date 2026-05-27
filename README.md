# ServicePageDemo

Descripción

- Proyecto demo de frontend para una landing/service page usando HTML, CSS y Tailwind.
- Contiene datos de servicios y testimonios en JavaScript para renderizar secciones estáticas.

Características

- Estructura simple y modular (`public/`, `src/`).
- Integración ligera con Tailwind CSS para estilos.
- Datos separados en `src/js/serviceData.js` y `src/js/testimonialData.js`.

Requisitos previos

- Node.js v14+ y npm instalados.
- Navegador moderno (Chrome, Firefox, Edge).

Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
npm install
```

Scripts comunes

- `npm run dev` — iniciar servidor de desarrollo.
- `npm run build` — generar build de producción (si aplica).
- `npm run preview` — previsualizar build (si aplica).

Si alguno de estos scripts no existe, revisá `package.json` y usá el comando adecuado.

Desarrollo

- Abrí el proyecto en tu editor.
- Levantá el servidor de desarrollo:

```bash
npm run dev
```

- Editá archivos en `src/` y el navegador recargará (dependiendo del bundler/servidor configurado).

Estructura del proyecto

- `public/` — Archivos públicos (favicon, assets estáticos).
- `src/` — Código fuente
  - `index.html` — Entrada principal.
  - `css/style.css` — Estilos base (Tailwind + overrides).
  - `js/serviceData.js` — Datos y configuración de servicios.
  - `js/testimonialData.js` — Datos de testimonios.
- `tailwind.config.js` — Configuración de Tailwind.
- `package.json` — Dependencias y scripts.

Uso

- Modificá `src/js/serviceData.js` para cambiar los servicios mostrados.
- Modificá `src/js/testimonialData.js` para actualizar testimonios.
- Los cambios en `index.html` o los archivos `src/` afectan la vista principal.

Sugerencias de despliegue

- Servir `public/` o el contenido de la build generada desde cualquier hosting estático (Netlify, Vercel, GitHub Pages).
- Si generás un build, subí la carpeta resultante (`dist/` o `build/`, según configuración).

Contribuir

- Hacé un fork y un PR con cambios claros.
- Antes de abrir PR, asegurate que el proyecto builda y que las rutas funcionan.

Licencia

- Revisa el archivo `LICENSE` en la raíz del proyecto para detalles.

Contacto

- Para dudas o sugerencias, abrí un issue en el repositorio.

Notas finales

- Este README es una plantilla recomendada; adaptala según las herramientas que realmente uses (Vite, Webpack, parcel, etc.).
