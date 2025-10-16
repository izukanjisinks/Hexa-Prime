import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/Home/Home.vue'
import About from '../Components/About/About.vue'
import Services from '../Components/Services/Services.vue'
import Contact from '../Components/Contact/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/index', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact },
  ],
})

export default router
