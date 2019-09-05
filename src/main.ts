import 'babel-polyfill'
import 'console-polyfill'

import './service-worker'
import './plugins/locale'
import './plugins/analytics'

import Vue from 'vue'
import App from './App.vue'
import config from '../package.json'
import router from '@/plugins/router'

import axios from 'axios'
import Meta from 'vue-meta'
import Axios from 'vue-axios'
import Events from 'vue-event-handler'

Vue.use(Meta)
Vue.use(Events)
Vue.use(Axios, axios)

// let currentLanguage: string
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  Vue.config.language = to.params.language || 'en'
  // currentLanguage = to.params.language || 'en'
  next()
})

console.log(Vue.config.language)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',

  render: create => create(App, {
    props: {
      language: Vue.config.language, // currentLanguage,
      version: config.version,
      domain: config.domain
    }
  })
})
/* eslint-enable no-new */
