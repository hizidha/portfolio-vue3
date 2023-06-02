import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutView.vue'
import DetailProjectView from '../views/ProjectDetailView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomeView
        },
        {
          path: 'project',
          name: 'ProjectPage',
          children: [
            {
              path: '',
              component: HomeView
            }
          ]
        },
      ]
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactView
    },
    {
      path: '/project/:id',
      name: 'DetailProject',
      component: DetailProjectView
    }
  ]
})

export default router