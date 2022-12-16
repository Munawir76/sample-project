import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Profile from '../views/Profile.vue'
import Edit from '../views/Edit.vue'
import Tambah from '../views/Tambah.vue'
import Regist from '../views/Regist.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tambah',
    name: 'Tambah',
    component: Tambah
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
