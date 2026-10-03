# TocinoDev — Portafolio

Portafolio personal minimalista y moderno, 100% frontend. React + Vite, sin backend.

**Stack:** HTML, CSS, JavaScript, Rust · **Herramientas:** OpenCode, Git, GitHub, React, Vite

## Desarrollo

```powershell
pnpm install
pnpm run dev      # servidor local (solo localhost)
pnpm run dev -- --host   # exponer en LAN para probar en el celu
pnpm run lint     # linter
pnpm run build    # build de producción en dist/
pnpm run preview  # previsualizar el build
```

## Personalizar

- **Proyectos:** edita el array `projects` en `src/data.js` (hay un ejemplo comentado con el formato).
- **Imágenes de proyectos:** WebP de máx 800px en `public/` (comprime antes con https://squoosh.app).
- **Foto/logo:** `src/assets/mylogo.png` (se optimiza solo en el build).
- **Contacto y redes:** enlaces en `src/App.jsx`.
