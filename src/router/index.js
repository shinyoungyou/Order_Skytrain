import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LogInPage.vue";
import LogoutPage from "../components/LogoutPage.vue"

import MenuPage from "../components/MenuPage.vue"
import SandwichPage from '../components/SandwichPage.vue'
import SaladPage from '../components/SaladPage.vue'
import BreakfastPage from '../components/BreakfastPage.vue'
import ShowDetails from '../components/ShowDetails.vue'
import NotFound from "../components/NotFound.vue"

const routes = [
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
    props: true
  },{
    path: '/logout',
    name: 'logout-page',
    component: LogoutPage,
    props: true
  },{
    path: '/',
    alias: '/menu',
    name: 'menu-page',
    component: MenuPage,
    props: true
  },{
    path: '/sandwiches',
    name: 'sandwich-page',
    component: SandwichPage,
    props: true
  },{
    path: '/salads',
    name: 'salad-page',
    component: SaladPage,
    props: true
  },{
    path: '/breakfast',
    name: 'breakfast-page',
    component: BreakfastPage,
    props: true
  },{
    // show details of product
    path: '/product/:id',
    name: 'show-details',
    component: ShowDetails,
    props: true
  },{
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router