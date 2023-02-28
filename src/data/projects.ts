import * as tech from "../utils/technologies.astro";

export interface Course {
  title: string;
  url: string;
  school: string;
  teacher: string;
}

export interface Project {
  year: number;
  title: string;
  subtitle: string;
  type: "commercial" | "personal" | "course";
  size: "large" | "medium" | "small";
  mobile: boolean;
  course?: Course;
  description?: string;
  image?: {
    full: string;
    mobile?: string;
  };
  color: {
    h: string;
    s: string;
    l: string;
  };
  bg?: string;
  technologies: tech.Tech[];
  link?: {
    text: string;
    url: string;
    lang: string;
    icon: tech.Tech;
  };
  source?: string;
}

const projects: Project[] = [
  {
    year: 2023,
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
    color: {
      h: "45",
      s: "97%",
      l: "48%",
    },
  },
  {
    year: 2023,
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
    color: {
      h: "346",
      s: "74%",
      l: "59%",
    },
  },
  {
    year: 2022,
    title: "Omnifood",
    subtitle: "Catering wspomagany SI",
    type: "course",
    size: "medium",
    course: {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      url: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
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
    color: {
      h: "39",
      s: "85%",
      l: "96%",
    },
  },
  {
    year: 2022,
    title: "Nexter",
    subtitle: "Luksusowe domy i apartamenty",
    type: "course",
    size: "medium",
    course: {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      url: "https://www.udemy.com/course/advanced-css-and-sass/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
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
    color: {
      h: "210",
      s: "44%",
      l: "10%",
    },
  },
  {
    year: 2022,
    title: "Trillo",
    subtitle: "Wyszukiwarka hoteli i lotów",
    type: "course",
    size: "medium",
    course: {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      url: "https://www.udemy.com/course/advanced-css-and-sass/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
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
    color: {
      h: "346",
      s: "96%",
      l: "58%",
    },
  },
  {
    year: 2023,
    title: "Remix Expenses",
    subtitle: "Zarządzaj swoimi wydatkami",
    type: "course",
    size: "small",
    course: {
      title: "Remix.js - The Practical Guide",
      url: "https://www.udemy.com/course/remix-course/",
      school: "Udemy",
      teacher: "Maximilian Schwarzmüller",
    },
    mobile: false,
    description:
      "Aplikacja, w której można założyć konto, zalogować się i zarządzać swoimi wydatkami.",
    image: {
      full: "/screenshots/remix-expenses-01.png",
    },
    technologies: [
      tech.Remix,
      tech.React,
      tech.Prisma,
      tech.MongoDB,
      tech.TS,
      tech.CSS,
      tech.HTML,
    ],
    link: {
      text: "Vercel",
      url: "https://dawidlehai-remix-expenses.vercel.app/",
      lang: "en",
      icon: tech.Vercel,
    },
    source: "https://github.com/dawidlehai/remix-expenses",
    color: {
      h: "248",
      s: "90%",
      l: "31%",
    },
  },
  {
    year: 2022,
    title: "Forkify",
    subtitle: "Wyszukuj i dodawaj przepisy",
    type: "course",
    size: "small",
    course: {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: false,
    description:
      "Aplikacja, w której możesz wyszukiwać, dodawać do zakładek oraz zapisać własne przepisy.",
    image: {
      full: "/screenshots/forkify-01.png",
    },
    technologies: [tech.JS, tech.Sass, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-forkify.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/forkify",
    color: {
      h: "23",
      s: "86%",
      l: "73%",
    },
  },
  {
    year: 2022,
    title: "Mapty",
    subtitle: "Śledź swoje treningi na mapie",
    type: "course",
    size: "small",
    course: {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: false,
    description:
      "Aplikacja, w której możesz dodawać treningi biegowe i rowerowe jako punkty na mapie.",
    image: {
      full: "/screenshots/mapty-01.png",
    },
    technologies: [tech.JS, tech.HTML, tech.CSS, tech.Leaflet],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-mapty.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/mapty",
    color: {
      h: "159",
      s: "100%",
      l: "40%",
    },
  },
  {
    year: 2022,
    title: "Delifood",
    subtitle: "Zamów pyszne jedzenie",
    type: "course",
    size: "small",
    course: {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      school: "Udemy",
      teacher: "Maximilian Schwarzmüller",
    },
    mobile: false,
    description:
      "Aplikacja demo, w której można dodawać i usuwać produkty z koszyka bez możliwości złożenia zamówienia.",
    image: {
      full: "/screenshots/delifood-01.png",
    },
    technologies: [tech.React, tech.JS, tech.CSS, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-delifood.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/delifood",
    color: {
      h: "174",
      s: "57%",
      l: "40%",
    },
  },
  {
    year: 2022,
    title: "React Expenses",
    subtitle: "Śledź swoje wydatki",
    type: "course",
    size: "small",
    course: {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      school: "Udemy",
      teacher: "Maximilian Schwarzmüller",
    },
    mobile: false,
    description:
      "Aplikacja demo, w której można dodawać swoje wydatki. Stan aplikacji ulega wyczyszczeniu po odświeżeniu strony.",
    image: {
      full: "/screenshots/react-expenses-tracker-01.png",
    },
    technologies: [tech.React, tech.JS, tech.CSS, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-react-expenses-tracker.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/react-expenses-tracker",
    color: {
      h: "278",
      s: "47%",
      l: "80%",
    },
  },
  {
    year: 2022,
    title: "Bankist",
    subtitle: "Prosty sposób na bankowość",
    type: "course",
    size: "small",
    course: {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: false,
    description:
      "Aplikacja demo, w której można zalogować się na jedno z predefiniowanych kont, a następnie wykonywać podstawowe czynności bankowe.",
    image: {
      full: "/screenshots/bankist-01.png",
    },
    technologies: [tech.JS, tech.CSS, tech.HTML],
    link: {
      text: "Netlify",
      url: "https://dawidlehai-bankist.netlify.app/",
      lang: "en",
      icon: tech.Netlify,
    },
    source: "https://github.com/dawidlehai/bankist",
    color: {
      h: "0",
      s: "0%",
      l: "95%",
    },
  },
  {
    year: 2014,
    title: "Protektor",
    subtitle: "Dystrybutor materiałów budowlanych",
    type: "commercial",
    size: "small",
    mobile: false,
    description:
      "Oficjalna strona internetowa firmy Protektor-Polska Sp. z o.o. z 2014 roku.",
    image: {
      full: "/screenshots/protektor-01.png",
    },
    technologies: [tech.CSS, tech.HTML],
    link: {
      text: "Strona",
      url: "https://protektor-polska.pl/",
      lang: "pl",
      icon: tech.PhLink,
    },
    color: {
      h: "52",
      s: "96%",
      l: "59%",
    },
  },
  {
    year: 2013,
    title: "Taktyki negocjacji",
    subtitle: "Zastosowanie i metody obrony",
    type: "personal",
    size: "small",
    mobile: false,
    description:
      "Najstarsza strona jaką udało mi się zachować. Projekt edukacyjny z 2013 roku.",
    image: {
      full: "/screenshots/taktyki-01.png",
    },
    technologies: [tech.CSS, tech.HTML, tech.PHP],
    link: {
      text: "Strona",
      url: "http://taktyki.jcom.pl/",
      lang: "pl",
      icon: tech.PhLink,
    },
    color: {
      h: "51",
      s: "23%",
      l: "68%",
    },
  },
];

export default projects;
