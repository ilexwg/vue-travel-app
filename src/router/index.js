import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brazil from '@/views/Brazil.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
