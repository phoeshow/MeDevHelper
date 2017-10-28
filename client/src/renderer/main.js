import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import store from './store' // use state
import db from '../modules/db' // a lite file database

Vue.use(Vuetify)

Vue.prototype.$db = db
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
