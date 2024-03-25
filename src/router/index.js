import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About/Index.vue'
import Contact from '../views/pages/Contact/Index.vue'
import Gallery from '../views/pages/Gallery/Index.vue'
import Merch from '../views/pages/Merch/Index.vue'
import Review from '../views/pages/Review/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/merch',
      name: 'merch',
      component: Merch
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Review
    },
  ]
})

export default router
