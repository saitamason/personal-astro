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
  subtitle: { en: string; pl: string };
  type: "commercial" | "personal" | "course";
  size: "large" | "medium" | "small";
  mobile: boolean;
  course?: Course;
  description?: {
    pl: string;
    en: string;
  };
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
    subtitle: {
      pl: "Bufet i kawiarnia w Bydgoszczy",
      en: "Buffet and cafe in Bydgoszcz",
    },
    type: "commercial",
    size: "large",
    mobile: true,
    description: {
      pl: "Strona internetowa firmy Kociołek. Projekt obejmował zaprojektowanie układu strony, dobór kolorów, grafik i fontów oraz napisanie kodu TypeScript, CSS i HTML z wykorzystaniem frameworków Remix oraz React.",
      en: "Home page of the Kociołek company. The project involved designing the page layout, choosing colors, graphics and fonts, and writing TypeScript, CSS, and HTML code using Remix and React frameworks.",
    },
    image: {
      full: "/screenshots/kociolek-01.png",
      mobile: "/screenshots/kociolek-mobile-01.png",
    },
    technologies: [tech.Remix, tech.React, tech.TS, tech.CSS],
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
    subtitle: {
      pl: "Kraje i ich sąsiedzi",
      en: "Countries and their neighbors",
    },
    type: "personal",
    size: "large",
    mobile: true,
    description: {
      pl: "Aplikacja edukacyjna typu SPA napisana w JavaScript, Sass i HTML, która pozwala wyświetlać informacje o krajach i ich sąsiadach, a także dodawać kraje do ulubionych oraz śledzić swój postęp nauki.",
      en: "A SPA-type educational application written in JavaScript, Sass, and HTML that allows you to view information about countries and their neighbors, as well as add countries to favorites and track your learning progress.",
    },
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
    source: "https://github.com/dawidlehai/natio",
    color: {
      h: "346",
      s: "74%",
      l: "59%",
    },
  },
  {
    year: 2023,
    title: "Remix Expenses",
    subtitle: { pl: "Menedżer wydatków", en: "An expense manager" },
    type: "course",
    size: "small",
    course: {
      title: "Remix.js - The Practical Guide",
      url: "https://www.udemy.com/course/remix-course/",
      school: "Udemy",
      teacher: "Maximilian Schwarzmüller",
    },
    mobile: false,
    description: {
      pl: "Załóż konto, zaloguj się i zarządzaj swoimi wydatkami.",
      en: "Create an account, log in and manage your expenses.",
    },
    image: {
      full: "/screenshots/remix-expenses-01.png",
    },
    technologies: [tech.Remix, tech.React, tech.TS],
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
    title: "Delifood",
    subtitle: { pl: "Sklep z żywnością", en: "A food store" },
    type: "course",
    size: "small",
    course: {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      school: "Udemy",
      teacher: "Maximilian Schwarzmüller",
    },
    mobile: false,
    description: {
      pl: "Dodawaj i usuwaj produkty z koszyka oraz złóż sztuczne zamówienie.",
      en: "Add and remove products from the cart and submit a fake order.",
    },
    image: {
      full: "/screenshots/delifood-01.png",
    },
    technologies: [tech.React, tech.JS, tech.CSS],
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
    subtitle: { pl: "Dziennik wydatków", en: "An expense logger" },
    type: "course",
    size: "small",
    course: {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      school: "Udemy",
      teacher: "Maximilian Schwarzmüller",
    },
    mobile: false,
    description: {
      pl: "Dodawaj swoje wydatki i sortuj je z podziałem na rok.",
      en: "Add your expenses and sort them by year.",
    },
    image: {
      full: "/screenshots/react-expenses-tracker-01.png",
    },
    technologies: [tech.React, tech.JS, tech.CSS],
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
    title: "Forkify",
    subtitle: { pl: "Katalog przepisów kulinarnych", en: "A recipe catalog" },
    type: "course",
    size: "small",
    course: {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: false,
    description: {
      pl: "Wyszukuj, dodawaj do zakładek oraz zapisuj własne przepisy.",
      en: "Search, bookmark and add your own recipes.",
    },
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
    title: "Omnifood",
    subtitle: { pl: "Catering wspomagany SI", en: "AI-powered catering" },
    type: "course",
    size: "small",
    course: {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      url: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: true,
    description: {
      pl: "Strona domowa dla firmy zajmującej się dietami pudełkowymi z pomocą SI.",
      en: "Home page for a fictional AI-powered food subscription service.",
    },
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
    subtitle: {
      pl: "Luksusowe domy i apartamenty",
      en: "Luxury homes and apartments",
    },
    type: "course",
    size: "small",
    course: {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      url: "https://www.udemy.com/course/advanced-css-and-sass/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: true,
    description: {
      pl: "Strona domowa dla firmy zajmującej się sprzedażą luksusowych domów.",
      en: "Demo landing page for a fictional company that sells luxury homes.",
    },
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
    subtitle: {
      pl: "Wyszukiwarka hoteli i lotów",
      en: "Hotel and flight search platform",
    },
    type: "course",
    size: "small",
    course: {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      url: "https://www.udemy.com/course/advanced-css-and-sass/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: true,
    description: {
      pl: "Szata graficzna dla serwisu zajmującego się rezerwacją hoteli.",
      en: "Layout for a fictional hotel booking service.",
    },
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
    year: 2022,
    title: "Mapty",
    subtitle: {
      pl: "Dziennik treningowy z mapą",
      en: "Workout tracker with a map.",
    },
    type: "course",
    size: "small",
    course: {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: false,
    description: {
      pl: "Dodawaj treningi biegowe i rowerowe jako punkty na mapie.",
      en: "Add running and cycling workouts to a map.",
    },
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
    title: "Bankist",
    subtitle: {
      pl: "Bankowy panel zarządzania",
      en: "Banking management panel",
    },
    type: "course",
    size: "small",
    course: {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      school: "Udemy",
      teacher: "Jonas Schmedtmann",
    },
    mobile: false,
    description: {
      pl: "Zaloguj się na konto i przetestuj podstawowe akcje UI.",
      en: "Demo banking app. Sort transactions, transfer money and more.",
    },
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
    subtitle: {
      pl: "Dystrybutor materiałów budowlanych",
      en: "Building materials distributor",
    },
    type: "commercial",
    size: "small",
    mobile: false,
    description: {
      pl: "Oficjalna strona internetowa firmy Protektor-Polska Sp. z o.o., którą wykonałem od podstaw na zamówienie w czasach nauki w technikum.",
      en: "The official website of Protektor-Polska Sp. z o.o., which I created from scratch when I was studying at a technical school.",
    },
    image: {
      full: "/screenshots/protektor-01.png",
    },
    technologies: [tech.CSS, tech.HTML],
    link: {
      text: "Strona",
      url: "https://protektor-polska.pl/",
      lang: "pl",
      icon: tech.Netlify,
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
    subtitle: { pl: "Zastosowanie i metody obrony", en: "Negotiation tactics" },
    type: "personal",
    size: "small",
    mobile: false,
    description: {
      pl: "Najstarsza strona jaką udało mi się zachować. Projekt edukacyjny w ramach konkursu Wyższej Szkoły Gospodarki.",
      en: "The oldest page I managed to keep. An educational project that was part of the competition of the University of Economy.",
    },
    image: {
      full: "/screenshots/taktyki-01.png",
    },
    technologies: [tech.CSS, tech.HTML, tech.PHP],
    link: {
      text: "Strona",
      url: "http://taktyki.jcom.pl/",
      lang: "pl",
      icon: tech.Netlify,
    },
    color: {
      h: "51",
      s: "23%",
      l: "68%",
    },
  },
];

export default projects;
