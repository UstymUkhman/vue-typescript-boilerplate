import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Platform from './platform'

// import axios from 'axios'
// import VueMeta from 'vue-meta'
// import VueAxios from 'vue-axios'
// import VueEvents from 'vue-event-handler'

// import './plugins/locale.js'
// import './plugins/analytics.js'

import './registerServiceWorker'
import config from '../package.json'

// Vue.use(VueMeta)
// Vue.use(VueEvents)
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',

  computed: {
    platform () {
      return Platform
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
