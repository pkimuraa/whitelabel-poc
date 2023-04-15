import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEn from '../locales/en/translation.json';
import translationPtbr from '../locales/ptbr/translation.json';

const resources = {
    en: {
        home: translationEn,
    },
    ptbr: {
        home: translationPtbr,
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        debug: false,
        fallbackLng: 'en',
        saveMissing: true
    });

export default i18next;