import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage/Homepage.vue'
import Detailpaeg from '../components/Detailpage/Detailpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Homepage',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/Detailpage',
    name: 'detailpage',
    component: Detailpaeg
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
