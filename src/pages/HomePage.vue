<script setup lang="ts">
import { PlusSmallIcon } from '@heroicons/vue/24/outline'
import { useCounterStore } from '@/stores/counter'
import NoContact from '@/components/NoContact.vue'
import CardInfo from '@/components/CardInfo.vue'

const store = useCounterStore()
</script>

<template>
  <div class="container max-w-6xl px-5 py-5 mx-auto pt-28">
    <h1 class="mb-12 text-4xl font-bold text-center text-black">Contact</h1>
    <div class="flex flex-col items-center">
      <no-contact v-if="store.contacts.length == 0" />
      <router-link
        :class="{ 'self-end': store.contacts.length !== 0 }"
        :to="{ name: 'addContact' }"
        class="flex items-center justify-center px-4 py-2 font-semibold text-white bg-blue-700 rounded-md"
      >
        <plus-small-icon class="w-6 h-6" />
        <span>Add contact</span>
      </router-link>
    </div>
    <div v-if="store.contacts?.length >= 1" class="flex flex-wrap justify-start gap-5 pt-5">
      <card-info :contacts="store.contacts" />
    </div>
  </div>
</template>
