import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Salas from '../views/Salas.vue'
import Seats from '../views/Seats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import(/* webpackChunkName: "about" */ '../components/Films.vue')
  },
  {
    path: '/salas',
    name: 'Salas',
    component: Salas
  },
  {
    path: '/seats',
    name: 'Seats',
    component: Seats
  },
]

const router = new VueRouter({
  routes
})

export default router
