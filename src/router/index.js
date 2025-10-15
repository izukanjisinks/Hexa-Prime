import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/index', component: Home },
  ],
})

export default router
