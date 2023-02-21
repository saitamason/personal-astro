import type { Project } from "../utils/types";
import * as tech from "../utils/technologies.astro";

const projects: Project[] = [
  {
    title: "Kociołek",
    subtitle: "Bufet i kawiarnia w Bydgoszczy",
    type: "commercial",
    size: "large",
    mobile: true,
    description:
      "Oficjalna strona internetowa firmy Kociołek. Projekt obejmował zaprojektowanie układu strony, dobór kolorów, grafik i fontów oraz napisanie kodu TypeScript, CSS i HTML z wykorzystaniem frameworków Remix oraz React.",
    image: {
      full: "/screenshots/kociolek-01.png",
      mobile: "/screenshots/kociolek-mobile-01.png",
    },
    technologies: [tech.Remix, tech.React, tech.TS, tech.CSS, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://kociolekbydgoszcz.pl",
      lang: "pl",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/kociolek-remix",
  },
  {
    title: "Natio",
    subtitle: "Informacje o krajach i ich sąsiadach",
    type: "personal",
    size: "large",
    mobile: true,
    description:
      "Aplikacja edukacyjna typu SPA napisana w JavaScript, Sass i HTML, która pozwala wyszukiwać i wyświetlać kraje, ich sąsiadów oraz informacje na ich temat. Możliwe jest również dodawanie krajów do ulubionych oraz śledzenie postępu odkrytych krajów.",
    image: {
      full: "/screenshots/natio-01.png",
      mobile: "/screenshots/natio-mobile-01.png",
    },
    technologies: [tech.JS, tech.Sass, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-natio.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/kociolek-remix",
  },
  {
    title: "Omnifood",
    subtitle: "Catering wspomagany SI",
    type: "course",
    size: "medium",
    mobile: true,
    description:
      "Strona domowa dla fikcyjnej firmy zajmującej się przygotowywaniem diety pudełkowej dobieranej z pomocą SI.",
    image: {
      full: "/screenshots/omnifood-01.png",
      mobile: "/screenshots/omnifood-mobile-01.png",
    },
    technologies: [tech.CSS, tech.HTML, tech.JS],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-omnifood.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/omnifood",
  },
  {
    title: "Nexter",
    subtitle: "Luksusowe domy i apartamenty",
    type: "course",
    size: "medium",
    mobile: true,
    description:
      "Strona domowa dla fikcyjnej firmy zajmującej się sprzedażą luksusowych domów i apartamentów.",
    image: {
      full: "/screenshots/nexter-01.png",
      mobile: "/screenshots/nexter-mobile-01.png",
    },
    technologies: [tech.CSS, tech.HTML, tech.JS],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-nexter.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/nexter",
  },
  {
    title: "Trillo",
    subtitle: "Zaplanuj swoją podróż",
    type: "course",
    size: "medium",
    course: {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      url: "https://www.udemy.com/course/advanced-css-and-sass/",
      school: "Udemy",
    },
    mobile: true,
    description:
      "Fikcyjna aplikacja dla serwisu zajmującego się rezerwacją hoteli, lotów i wynajmem samochodów.",
    image: {
      full: "/screenshots/trillo-01.png",
      mobile: "/screenshots/trillo-mobile-01.png",
    },
    technologies: [tech.CSS, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-trillo.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/trillo",
  },
];

export default projects;
