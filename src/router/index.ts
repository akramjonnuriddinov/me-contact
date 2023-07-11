import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../pages/AddContact.vue'
import HomePage from '@/pages/HomePage.vue'
import EditContact from '@/pages/EditContact.vue'

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
    {
      path: '/edit',
      name: 'editContact',
      component: EditContact
    }
  ]
})

export default router
