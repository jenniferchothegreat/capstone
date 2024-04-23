import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from './components/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/aboutus', component: AboutUs },
  // Add routes for other pages/components here
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
