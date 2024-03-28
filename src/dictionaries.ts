import "server-only";

const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  cz: () => import("./locales/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
