import I18n from 'react-native-i18n';
import en from './en';
import fr from './fr';
import mg from './mg';

I18n.fallbacks = true;

I18n.translations = {
    en,
    fr,
    mg
};

export default I18n;