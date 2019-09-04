import 'babel-polyfill'
import 'console-polyfill'

import './service-worker'
// import './plugins/locale.js'
// import './plugins/analytics.js'

import Vue from 'vue'
import App from './App.vue'

import platform from './platform'
import config from '../package.json'
import router from './plugins/router'

import axios from 'axios'
import Meta from 'vue-meta'
import Axios from 'vue-axios'
import Events from 'vue-event-handler'

import { language, prerenderer } from '@/platform'

console.log(language, prerenderer)

Vue.use(Meta)
Vue.use(Events)
Vue.use(Axios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',

  computed: {
    platform () {
      return platform
    },

    multilanguage () {
      return config.multilanguage
    }
  },

  render: create => create(App, {
    props: {
      version: config.version,
      domain: config.domain
    }
  })
})
/* eslint-enable no-new */
