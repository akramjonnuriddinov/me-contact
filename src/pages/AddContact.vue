<script lang="ts" setup>
import { reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRouter } from 'vue-router'
import { PhoneIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const store = useCounterStore()
const router = useRouter()

const user_contacts = reactive({
  email: '',
  username: '',
  phone_number: ''
})

const contacts = store.contacts

const addContact = () => {
  if (
    user_contacts.email.length !== 0 &&
    user_contacts.username.length !== 0 &&
    user_contacts.phone_number.length !== 0
  ) {
    contacts.unshift(user_contacts)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    router.push('/')
  }
}
</script>

<template>
  <div class="min-h-screen px-5 py-16 bg-gray-50">
    <div class="max-w-md p-10 mx-auto bg-white rounded">
      <h1 class="mb-5 text-2xl font-medium text-center text-black">Add Contact</h1>
      <label
        for="input-group-1"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your Email</label
      >
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <envelope-icon class="w-5 h-5 text-gray-700 dark:text-gray-400" />
        </div>
        <input
          v-model="user_contacts.email"
          autocomplete="off"
          type="text"
          id="input-group-1"
          class="bg-gray-50 border outline-blue-500 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
          placeholder="the.akramjon@gmail.com"
        />
      </div>
      <label
        for="input-group-1"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Username</label
      >
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <user-icon class="w-5 h-5 text-gray-700 dark:text-gray-400" />
        </div>
        <input
          v-model="user_contacts.username"
          autocomplete="off"
          type="text"
          id="input-group-1"
          class="bg-gray-50 border outline-blue-500 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
          placeholder="the.akramjon"
        />
      </div>
      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Phone number</label
      >
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <phone-icon class="w-5 h-5 text-gray-700 dark:text-gray-400" />
        </div>
        <input
          v-model="user_contacts.phone_number"
          autocomplete="off"
          type="tel"
          id="phone"
          class="bg-gray-50 border outline-blue-500 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
          placeholder="+998 (90) 050 6166"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </div>
      <div class="flex justify-between gap-2">
        <button
          @click="addContact()"
          class="flex items-center justify-center px-10 py-2 font-semibold text-white bg-blue-700 rounded-md shadow-md"
        >
          <span>Add contact</span>
        </button>
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center justify-center px-12 py-2 font-semibold bg-gray-100 rounded-md shadow-md"
        >
          <span>Close</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
