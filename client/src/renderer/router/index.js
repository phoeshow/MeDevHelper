import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mockserver',
      name: 'mockserver',
      component: require('@/components/MockserverView/MockserverView')
    },
    {
      path: '/mockmanager',
      name: 'mockmanager',
      component: require('@/components/MockmanagerView/MockmanagerView')
    },
    {
      path: '/test',
      name: 'test',
      component: require('@/components/TestView/TestView')
    },
    {
      path: '*',
      redirect: '/mockserver'
    }
  ]
})
