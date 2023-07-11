import { defineStore } from 'pinia'
// import { useRouter } from 'vue-router'
// const router = useRouter()

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      emails: JSON.parse(localStorage.getItem('emails')) || []
    }
  },
  actions: {
    closeModal() {
      // router.push('/')
    },
    deleteContact(index) {
      this.emails.filter(i => i !== index)
      localStorage.removeItem(this.emails[index])
      console.log('delete')
    }
  },
})
