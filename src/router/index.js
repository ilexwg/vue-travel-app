import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import(/* webpackChunkName: 'brazil' */ '@/views/Brazil')
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/* webpackChunkName: 'panama' */ '@/views/Panama')
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import(/* webpackChunkName: 'hawaii' */ '@/views/Hawaii')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import(/* webpackChunkName: 'jamaica' */ '@/views/Jamaica')
  },
  {
    path: '/details/:id',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: 'DestinationDetails' */ '@/views/DestinationDetails')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'travel-app-exact-active',
  routes
})

export default router
