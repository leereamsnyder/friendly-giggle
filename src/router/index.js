import Vue from 'vue'
import Router from 'vue-router'
import JobsTable from '@/components/Jobs-table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: JobsTable
    }
  ]
})
