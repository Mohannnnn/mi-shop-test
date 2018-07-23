import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/' ,
      redirect : '/home'
    },
    {
      path: '/home',
      name: 'home',
      component(resolve){
        require.ensure([] , () => resolve(require('@/views/home')))
      }
    },
    {
      path : '/home',
      name : 'home',
      // component : () => import('@/views/home.vue')
      // component : (resolve) => require(['@/views/home.vue'] ,resolve)
      // component(resolve){ require.ensure([] , () => resolve(require('@/views/home.vue')))}
      component(resolve) {
        require.ensure([] , resolve(require('@/views/home')))
      }
    }
  ]
})
