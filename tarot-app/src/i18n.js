import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from '../src/locales/en/translation.json';
import translationES from '../src/locales/es/translation.json';

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};


i18n
  .use(reactI18nextModule) 
  .init({
    resources,
    lng: "es",
    keySeparator: '.',
    saveMissing: true, 
    // initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;