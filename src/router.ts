import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!Store.state.activeRole) {
          next('/createRole')
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
      path: '/createRole',
      name: 'createRole',
      component: () => import(/* webpackChunkName: "createRole" */ './views/CreateRole.vue'),
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
