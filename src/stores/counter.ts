import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      contacts: JSON.parse(localStorage.getItem('contacts')) || []
    }
  },
  actions: {
    deleteContact(index) {
      this.contacts.splice(index, 1)
      localStorage.setItem('contacts', JSON.stringify(this.contacts))
      console.log(index)
    }
  },
})
