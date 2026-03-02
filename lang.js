// ─────────────────────────────────────────
//  lang.js — Language switcher (ES / EN)
//  Usage: add data-es="..." data-en="..."
//  to any element you want translated.
// ─────────────────────────────────────────

const translations = {
  es: {
    // Header
    subtitle:       "Diseñador de Videojuegos • Programador de Galaxias",
    nav_about:      "Sobre mí",
    nav_projects:   "Proyectos",
    nav_contact:    "Contacto",

    // About
    section_about:  "Sobre mí",
    greeting:       "¡Hola, soy Joaquín!",
    bio1: "Soy un desarrollador de videojuegos apasionado por la creación de mundos interactivos, experiencias entretenidas y desafiantes. Mi enfoque combina creatividad, lógica y una pizca de locura.",
    bio2: "He trabajado en títulos independientes que abarcan desde plataformeros frenéticos hasta simulaciones experimentales. Me encanta aprender tecnologías nuevas, colaborar con equipos multidisciplinarios y convertir ideas en realidad jugable.",

    // Video
    video_title:    "Video portafolio",

    // Projects
    section_projects: "Mis Proyectos",
    desc_lethallive:  "Lethal Live es un juego de supervivencia donde exploras los backrooms para recolectar objetos, venderlos y completar una cuota diaria.",
    desc_projectpl:   "Juego de horror en realidad virtual ambientado en la fundación SCP. Explora la fundación mientras escapas de los monstruos que han sido liberados como experimento, donde tú eres la rata de laboratorio.",
    desc_bubblebind:  "Juego de puzzles 2D con una mecánica única de burbujas que desafiarán tus habilidades cognitivas. Incluye un editor de niveles para que puedas crear y compartir tus propios desafíos.",
    desc_chivivors:   "Una horda de monstruos, caos y acción en este juego tipo Vampire Survivors. Roguelike con múltiples personajes, objetos y habilidades que te permiten jugar de innumerables formas.",
    desc_perplexity:  "Juego de horror atmosférico con estética liminal inspirada por los conocidos Backrooms. Adentrate en oscuros pasillos que te pondrán los pelos de punta y te harán cuestionar tu cordura.",
    desc_wildstore:   "Simulador de supermercado en un mundo donde los clientes son mascotas inteligentes que quieren comprar productos para la semana.",
    desc_psiquepark:  "Videojuego de puzzles con temática de terror que desafiará tu inteligencia.",
    desc_thiefcats:   "Juego multijugador en el que los jugadores asumen el papel de gatos ladrones que deben robar objetos valiosos mientras evitan ser atrapados o el de un perro que debe acabar con ellos.",
    desc_parkour:     "Juego de plataformas 2D pixel art con mecánicas de parkour intensas. Corre, salta y escala a través de un único nivel en el que si caes puedes perder todo tu progreso.",
    btn_view:         "Ver proyecto",

    // 3D Models
    section_models:   "Mis Modelos 3D",

    // Contact
    section_contact:  "Contacto",
    contact_text:     "Puedes contactarme en:",
  },

  en: {
    // Header
    subtitle:       "Game Designer • Galaxy Programmer",
    nav_about:      "About me",
    nav_projects:   "Projects",
    nav_contact:    "Contact",

    // About
    section_about:  "About me",
    greeting:       "Hi, I'm Joaquín!",
    bio1: "I'm a game developer passionate about creating interactive worlds, entertaining and challenging experiences. My approach combines creativity, logic, and a pinch of madness.",
    bio2: "I've worked on indie titles ranging from fast paced platformers to experimental simulations. I love learning new technologies, collaborating with multidisciplinary teams, and turning ideas into playable reality.",

    // Video
    video_title:    "Portfolio Video",

    // Projects
    section_projects: "My Projects",
    desc_lethallive:  "Lethal Live is a survival game where you explore the backrooms to scavenge goods, sell them, and complete a daily quota.",
    desc_projectpl:   "A VR horror game set in the SCP Foundation. Explore the facility while escaping the monsters released as an experiment where you are the lab rat.",
    desc_bubblebind:  "A 2D puzzle game with a unique bubble mechanic that will challenge your cognitive skills. Includes a level editor so you can create and share your own challenges.",
    desc_chivivors:   "Hordes of monsters, chaos, and action in this Vampire Survivors-style game. A roguelike with multiple characters, items, and abilities that let you play in countless ways.",
    desc_perplexity:  "An atmospheric horror game with a liminal aesthetic inspired by the Backrooms. Enter dark hallways that will make your skin crawl and your sanity slip.",
    desc_wildstore:   "A supermarket simulator set in a world where the customers are intelligent pets shopping for their weekly groceries.",
    desc_psiquepark:  "A horror themed puzzle game that will challenge your intelligence.",
    desc_thiefcats:   "A multiplayer game where players take on the role of thieving cats stealing valuable items while avoiding capture, or a dog trying to stop them.",
    desc_parkour:     "A 2D pixel art platformer with intense parkour mechanics. Run, jump, and climb through a single level where a fall can cost you all your progress.",
    btn_view:         "View project",

    // 3D Models
    section_models:   "My 3D Models",

    // Contact
    section_contact:  "Contact",
    contact_text:     "You can reach me at:",
  }
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? '🌐 EN' : '🌐 ES';
}

function toggleLang() {
  setLang(currentLang === 'es' ? 'en' : 'es');
}

document.addEventListener('DOMContentLoaded', () => setLang('es'));
