import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component(resolve){
        require.ensure([] , () => resolve(require('@/components/HelloWorld')))
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
