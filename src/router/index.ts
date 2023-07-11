import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../pages/AddContact.vue'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/add',
      name: 'addContact',
      component: AddContact
    },
  ]
})

export default router
