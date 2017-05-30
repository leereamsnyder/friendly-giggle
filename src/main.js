// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import JobsSearch from '@/components/Jobs-search'
import Job from '@/components/Job'

Vue.config.productionTip = false

Vue.component('jobs-search', JobsSearch)
Vue.component('job', Job)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
