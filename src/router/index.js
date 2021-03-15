import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brazil from '@/views/Brazil.vue'
import Panama from '@/views/Panama.vue'
import Hawaii from '@/views/Hawaii.vue'
import Jamaica from '@/views/Jamaica.vue'

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
    component: Brazil
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: Hawaii
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: Jamaica
  }
]

const router = new VueRouter({
  routes
})

export default router
