import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            // component : () => import('@/views/home.vue')
            // component : (resolve) => require(['@/views/home.vue'] ,resolve)
            // component(resolve){ require.ensure([] , () => resolve(require('@/views/home.vue')))}
            component(resolve) {
                require.ensure([], () => resolve(require('@/views/home')))
            },
            children: [{
                path: 'a',
                name: 'a',
                component(resolve) {
                    require.ensure([], () => resolve(require('@/views/classify')))
                }
            }]
        },
        {
            path: '/classify',
            name: 'classify',
            component(resolve) {
                require.ensure([], () => resolve(require('@/views/classify')))
            }
        },
        {
            path: '/shoppingcar',
            name: 'shoppingcar',
            component(resolve) {
                require.ensure([], () => resolve(require('@/views/shoppingcar')))
            }
        },
        {
            path: '/mine',
            name: 'mine',
            component(resolve) {
                require.ensure([], () => resolve(require('@/views/mine')))
            }
        }
    ]
})