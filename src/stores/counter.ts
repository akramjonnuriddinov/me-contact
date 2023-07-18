import { defineStore } from 'pinia'
import router from '@/router/index'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
      index: null
    }
  },
  actions: {
    deleteContact(index) {
      this.contacts.splice(index, 1)
      localStorage.setItem('contacts', JSON.stringify(this.contacts))
    },
    editContact(index) {
      this.index = index
      router.push({ name: 'editContact' })
      console.log(index)
    },
    updateContact() {
      console.log('updated')
    }
  },
})
