import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './i18n/i18n.tsx';

const initI18n = i18n; // Necessary for i18n -> Init react-i18next
console.log('i18n', initI18n);
AppRegistry.registerComponent(appName, () => App);
