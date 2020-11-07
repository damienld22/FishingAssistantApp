import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import frRessources from './fr.json';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'fr', // for now only french is supported
  resources: {
    fr: {translation: frRessources},
  },
});

export default i18n;
