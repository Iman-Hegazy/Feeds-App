import i18n from 'i18next';
import { I18nManager } from 'react-native';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ar from './ar.json';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'ar',
  compatibilityJSON: 'v3',
  lng: I18nManager.isRTL ? "ar" : 'en',
  interpolation: {
    escapeValue: false
  }

});


