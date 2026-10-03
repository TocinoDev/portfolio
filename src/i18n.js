import html5Logo from "./assets/icons/html5.svg";
import cssLogo from "./assets/icons/css.svg";
import jsLogo from "./assets/icons/javascript.svg";
import rustLogo from "./assets/icons/rust.svg";
import opencodeLogo from "./assets/icons/opencode.svg";
import gitLogo from "./assets/icons/git.svg";
import githubLogo from "./assets/icons/github.svg";
import reactLogo from "./assets/icons/react.svg";
import viteLogo from "./assets/icons/vite.svg";

export const STRINGS = {
  en: {
    metaTitle: "TocinoDev — Junior backend and desktop developer",
    metaDescription:
      "TocinoDev portfolio, junior backend and desktop developer. Stack: HTML, CSS, JavaScript and Rust. Projects, tools and contact.",
    nav: {
      about: "About",
      stack: "Stack",
      tools: "Tools",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      label: "Switch light / dark theme",
      title: "Switch theme",
    },
    lang: {
      code: "ES",
      label: "Switch to Spanish",
      title: "Switch to Spanish",
    },
    hero: {
      eyebrow: "Hi, I'm",
      logoAlt: "TocinoDev logo, junior backend and desktop developer",
      role: "Junior backend and desktop developer",
      desc: "I focus on building simple, fast and well-structured software. I work with core web technologies and Rust for backend and desktop applications.",
      projects: "View projects",
      contact: "Contact",
      status: "Available for projects",
      goContact: "Go to contact",
    },
    about: {
      title: "About me",
      p1a: "I'm ",
      p1b:
        ", a junior backend and desktop developer. I like minimalism: readable code, clean interfaces and programs that do one thing well.",
      p2a: "I currently dig into ",
      p2b:
        " for backend logic and desktop apps, and I master the web basics — ",
      p2c: " — to build fast interfaces without heavy dependencies.",
      web: "HTML, CSS and JavaScript",
      list: [
        "Focus on performance and good practices",
        "Learning Rust in depth (ownership, modules, CLI)",
        "Goal: first role as a junior backend / desktop developer",
      ],
    },
    stack: {
      title: "My stack",
      sub: "Technologies I use every day.",
      items: [
        {
          name: "HTML",
          level: "Intermediate",
          description: "Semantic and accessible structure",
          logo: html5Logo,
        },
        {
          name: "CSS",
          level: "Intermediate",
          description: "Modern responsive design",
          logo: cssLogo,
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          description: "Frontend logic and interactivity",
          logo: jsLogo,
        },
        {
          name: "Rust",
          level: "Junior",
          description: "Backend and desktop, performance and safety",
          logo: rustLogo,
          adaptive: true,
        },
      ],
    },
    tools: {
      title: "Tools",
      sub: "Tools I use in my workflow.",
      items: [
        {
          name: "OpenCode",
          description: "AI agent to code faster",
          logo: opencodeLogo,
          url: "https://opencode.ai",
          adaptive: true,
        },
        {
          name: "Git",
          description: "Version control for my projects",
          logo: gitLogo,
          url: "https://git-scm.com/doc",
        },
        {
          name: "GitHub",
          description: "Code hosting and collaboration",
          logo: githubLogo,
          url: "https://github.com/TocinoDev",
          adaptive: true,
        },
        {
          name: "React",
          description: "Library for user interfaces",
          logo: reactLogo,
          url: "https://react.dev",
        },
        {
          name: "Vite",
          description: "Build tool and dev server",
          logo: viteLogo,
          url: "https://vite.dev",
        },
      ],
    },
    projects: {
      title: "Projects",
      sub: "A selection of my work.",
      empty: "No projects published yet. I'm working on it — check back soon.",
      demo: "Demo",
      code: "Code",
      imgAlt: (title) => `Screenshot of the ${title} project`,
    },
    contact: {
      title: "Contact",
      heading: "Shall we build something together?",
      text: "I'm available for internships, freelance projects and open source collaborations. Reach me on my networks.",
      github: "My GitHub",
      projects: "View projects",
      note: "No forms or trackers. Nothing you do here is stored on this site.",
    },
    footer: {
      top: "Back to top ↑",
    },
    notFound: {
      title: "Page not found",
      text: "The route you're looking for doesn't exist or was moved. Check the address or go back home to keep exploring the portfolio.",
      home: "Back to home",
      projects: "View projects",
    },
  },
  es: {
    metaTitle: "TocinoDev — Desarrollador backend y desktop junior",
    metaDescription:
      "Portafolio de TocinoDev, desarrollador backend y desktop junior. Stack: HTML, CSS, JavaScript y Rust. Proyectos, herramientas y contacto.",
    nav: {
      about: "Sobre mí",
      stack: "Stack",
      tools: "Herramientas",
      projects: "Proyectos",
      contact: "Contacto",
      openMenu: "Abrir menú",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      label: "Cambiar tema claro / oscuro",
      title: "Cambiar tema",
    },
    lang: {
      code: "EN",
      label: "Cambiar a inglés",
      title: "Cambiar a inglés",
    },
    hero: {
      eyebrow: "Hola, soy",
      logoAlt: "Logo de TocinoDev, desarrollador backend y desktop junior",
      role: "Desarrollador backend y desktop junior",
      desc: "Me enfoco en construir software simple, rápido y bien estructurado. Trabajo con tecnologías web base y Rust para backend y aplicaciones de escritorio.",
      projects: "Ver proyectos",
      contact: "Contactar",
      status: "Disponible para proyectos",
      goContact: "Ir a contacto",
    },
    about: {
      title: "Sobre mí",
      p1a: "Soy ",
      p1b:
        ", desarrollador backend y desktop junior. Me gusta el minimalismo: código legible, interfaces limpias y programas que hacen bien una sola cosa.",
      p2a: "Actualmente profundizo en ",
      p2b:
        " para lógica de backend y apps de escritorio, y domino la base web — ",
      p2c: " — para crear interfaces rápidas sin dependencias pesadas.",
      web: "HTML, CSS y JavaScript",
      list: [
        "Enfoque en rendimiento y buenas prácticas",
        "Aprendiendo Rust a fondo (ownership, módulos, CLI)",
        "Objetivo: primer rol como backend / desktop junior",
      ],
    },
    stack: {
      title: "Mi stack",
      sub: "Tecnologías que uso día a día.",
      items: [
        {
          name: "HTML",
          level: "Intermedio",
          description: "Estructura semántica y accesible",
          logo: html5Logo,
        },
        {
          name: "CSS",
          level: "Intermedio",
          description: "Diseño responsive y moderno",
          logo: cssLogo,
        },
        {
          name: "JavaScript",
          level: "Intermedio",
          description: "Lógica frontend e interactividad",
          logo: jsLogo,
        },
        {
          name: "Rust",
          level: "Junior",
          description: "Backend y desktop, rendimiento y seguridad",
          logo: rustLogo,
          adaptive: true,
        },
      ],
    },
    tools: {
      title: "Herramientas",
      sub: "Herramientas que uso en mi flujo de trabajo.",
      items: [
        {
          name: "OpenCode",
          description: "Agente de IA para programar más rápido",
          logo: opencodeLogo,
          url: "https://opencode.ai",
          adaptive: true,
        },
        {
          name: "Git",
          description: "Control de versiones de mis proyectos",
          logo: gitLogo,
          url: "https://git-scm.com/doc",
        },
        {
          name: "GitHub",
          description: "Hospedaje de código y colaboración",
          logo: githubLogo,
          url: "https://github.com/TocinoDev",
          adaptive: true,
        },
        {
          name: "React",
          description: "Librería para interfaces de usuario",
          logo: reactLogo,
          url: "https://react.dev",
        },
        {
          name: "Vite",
          description: "Build tool y servidor de desarrollo",
          logo: viteLogo,
          url: "https://vite.dev",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      sub: "Una selección de mi trabajo.",
      empty: "Aún no hay proyectos publicados. Estoy trabajando en ello — vuelve pronto.",
      demo: "Demo",
      code: "Código",
      imgAlt: (title) => `Captura del proyecto ${title}`,
    },
    contact: {
      title: "Contacto",
      heading: "¿Creamos algo juntos?",
      text: "Estoy disponible para prácticas, proyectos freelance y colaboraciones open source. Escríbeme por mis redes.",
      github: "Mi GitHub",
      projects: "Ver proyectos",
      note: "Sin formularios ni rastreadores. Nada de lo que hagas aquí se almacena en esta web.",
    },
    footer: {
      top: "Volver arriba ↑",
    },
    notFound: {
      title: "Página no encontrada",
      text: "La ruta que buscas no existe o fue movida. Revisa la dirección o vuelve al inicio para seguir explorando el portafolio.",
      home: "Volver al inicio",
      projects: "Ver proyectos",
    },
  },
};

export const projects = [];
