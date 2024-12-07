import en from "./app/locales/en.json";
import km from "./app/locales/km.json";
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
