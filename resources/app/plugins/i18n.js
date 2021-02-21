import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '~/lang/en';
import vi from '~/lang/vi';

Vue.use(VueI18n);

const options = {
  locale: 'vi',
  messages: {
    en,
    vi
  }
};

export default new VueI18n(options);
