import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage/Homepage.vue'
import Detailpaeg from '../components/Detailpage/Detailpage.vue'
import Orderpage from '../components/Orderpage/Orderpage.vue'
import Payment from '../components/Paymentpage/PaymentSlip.vue'
import AdminOrderpage from '../components/Adminpage/Adminorderpage.vue'
import AdminPaymentpage from '../components/Adminpage/Adminpaymentpage.vue'

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
  {
    path: '/Orderpage',
    name: 'orderpage',
    component: Orderpage
  },
  {
    path: '/Paymentpage',
    name: 'paymentpage',
    component: Payment
  },
  {
    path: '/Adminorderpage',
    name: 'adminorderpagee',
    component: AdminOrderpage
  },{
    path: '/AdminPaymentpage',
    name: 'adminpaymentpage',
    component: AdminPaymentpage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
