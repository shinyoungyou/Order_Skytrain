import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../views/LogInPage.vue"
import SandwichList from '../views/SandwichPage.vue'
import SaladList from '../views/SaladPage.vue'
import BreakfastList from '../views/BreakfastPage.vue'
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LogIn,
    },{
      path: '/sandwiches',
      component: SandwichList,
    },{
      path: '/salads',
      component: SaladList,
    },{
      path: '/breakfast',
      component: BreakfastList,
    },{
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router