import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

const pathListWithoutBottomNav = [
  'newrole',
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!Store.state.activeRole) {
          next('/newrole')
        } else {
          next()
        }
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/newrole',
      name: 'newrole',
      component: () => import(/* webpackChunkName: "createRole" */ './views/CreateRole.vue'),
      beforeEnter: (to, from, next) => {
        if (Store.state.activeRole) {
          next('/')
        } else {
          next()
        }
      },
    },
    {
      path: '/error/:type',
      name: 'error',
      props: true,
      component: () => import(/* webpackChunkName: "error" */ './views/Error.vue'),
    },
    {
      path: '*',
      redirect: '/error/404',
    },
  ],
})

router.beforeEach((to, from, next) => {
  // bottomNav control
  const isBottomNavShown = !pathListWithoutBottomNav.includes(to.name || '')
  Store.dispatch('setBottomNavShown', isBottomNavShown)
  next()
})

export default router
