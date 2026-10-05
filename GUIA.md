# Guía del portafolio

## Agregar un proyecto

Edita el array `projects` en `src/i18n.js` (hay uno por idioma, `en` y `es`) con este formato:

```js
{
  id: 2,
  slug: "mi-proyecto",
  title: "Mi proyecto",
  description: "Descripción corta (español).",
  descriptionEn: "Short description (English).",
  intro: "Descripción larga para la vista de detalle (español).",
  introEn: "Long description for the detail view (English).",
  features: ["Punto 1", "Punto 2"],
  featuresEn: ["Point 1", "Point 2"],
  install: ["git clone ...", "cd ..."],
  tech: ["HTML", "CSS", "JavaScript"],
  demoUrl: "https://...",
  repoUrl: "https://github.com/...",
  image: "/mi-proyecto.webp", // o "" para placeholder
},
```

La imagen lleva a `#/proyecto/<slug>` con la ficha detallada.

## Imágenes de proyectos

- Formato WebP, máx 800px de ancho. Comprímelas antes en https://squoosh.app (calidad ~80).
- Guárdalas en `public/` con nombre descriptivo, ej: `/proyecto-tienda.webp`.
- El `<img>` ya usa `loading="lazy"` + `decoding="async"` + `alt` automático.
- Si dejas `image: ""` se muestra placeholder.

## Cambiar el logo/foto

Sustituye `src/assets/mylogo.png` por tu imagen (se optimiza sola en el build).
Se muestra en círculo de 300px (200px en celular).

## Cambiar enlaces y contacto

- Redes y botones: `src/App.jsx` (busca `github.com`).
- Stack y herramientas: arrays en `src/i18n.js` (en cada idioma).
- Para herramientas con enlace externo agrega el campo `url`.

## Idioma

La web siempre arranca en inglés (no se guarda nada en el navegador).
Todos los textos viven en `src/i18n.js` (`STRINGS.en` y `STRINGS.es`).

## Probar en el celu (misma WiFi)

```powershell
pnpm run dev -- --host
pnpm run build
pnpm run preview -- --host   # versión rápida de producción
```

En el celu abre la dirección `Network` que muestra la terminal.

## Antes de publicar

1. En `index.html`: poner URLs absolutas con tu dominio en `og:url` y `og:image`.
2. En GitHub: Settings → Pages → Source = **GitHub Actions** (el deploy es automático con `.github/workflows/deploy.yml` al hacer push a `main`).
3. Repetir `pnpm audit` de vez en cuando.
4. Revisar que no haya datos personales que no quieras exponer.
