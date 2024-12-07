import en from "./locales/en.json";
import km from "./locales/km.json";
export const localeMap: { [k: string]: string } = {
  km: "ខេមរភាសា",
  en: "English",
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    km,
    en,
  },
}));
