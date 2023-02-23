import type { LanguageVersionsType } from "../utils/types";

interface EducationType {
  id: number;
  years: number[];
  title: LanguageVersionsType;
  description: LanguageVersionsType;
  logo: {
    filename: string;
    alt: LanguageVersionsType;
  };
}

const education: EducationType[] = [
  {
    id: 1,
    years: [2017, 2022],
    title: {
      en: "",
      pl: "Magister psychologii",
    },
    description: {
      en: "",
      pl: "Dyplom psychologa uzyskałem na Wydziale Psychologii Uniwersytetu Kazimierza Wielkiego na podstawie pracy magisterskiej pt. „Tożsamość środowiskowa i dobrowolna prostota: korelaty osobowościowe i socjodemograficzne”, która została wyróżniona przez Radę Kolegium II jako najlepsza praca magisterska roku akademickiego 2021/2022 na kierunku psychologia. Studia ukończyłem z najwyższą średnią ocen (4,86) oraz Nagrodą Rektora dla Najlepszego Absolwenta roku akademickiego 2021/2022 za działalność pozanaukową. Podczas czterech lat studiów pełniłem rolę starosty roku oraz otrzymywałem stypendium za osiągnięcia naukowe. Byłem również członkiem wielu kół naukowych oraz pełniłem w nich rolę prezesa i viceprezesa, a także przez krótki okres reprezentowałem Samorząd Studencki.",
    },
    logo: {
      filename: "ukw.svg",
      alt: {
        en: "Kazimierz Wielki University",
        pl: "Uniwersytet Kazimierza Wielkiego",
      },
    },
  },
  {
    id: 2,
    years: [2022],
    title: {
      en: "Inland Norway University of Applied Sciences",
      default: "en",
    },
    description: {
      en: "",
      pl: "Jako laureat grantu EEA, sponsorowanego przez Islandię, Liechtenstein i Norwegię, uczestniczyłem na wymianie studenckiej na Inland Norway University of Applied Sciences na wydziale Inland School of Business and Social Sciences.",
    },
    logo: {
      filename: "ukw.svg",
      alt: {
        en: "Inland Norway University of Applied Sciences",
        default: "en",
      },
    },
  },
];

export default education;
