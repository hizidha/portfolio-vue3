import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutView.vue'
import DetailProjectView from '../views/ProjectDetailView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/project/:id',
      name: 'DetailProject',
      component: DetailProjectView
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactView
    }
  ]
})

export default router
