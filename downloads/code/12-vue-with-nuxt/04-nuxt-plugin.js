import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { en, fr } from '~/locales'

Vue.use(VueI18n)

export default nuxtContext => {
  const { app } = nuxtContext
  app.i18n = new VueI18n({
    fallbackLocale: `en`,
    messages: { en, fr },
  })
}
