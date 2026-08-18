import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lugar/:id',
    name: 'detail',
    component: DetailView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
