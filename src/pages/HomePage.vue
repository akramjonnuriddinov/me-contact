<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon, TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
import { PlusSmallIcon } from '@heroicons/vue/24/outline'
import { useCounterStore } from '@/stores/counter'
import NoContact from '@/components/NoContact.vue'

const store = useCounterStore()
</script>

<template>
  <div class="container max-w-6xl px-5 py-5 mx-auto pt-28">
    <h1 class="mb-12 text-4xl font-bold text-center text-black">Contact</h1>
    <div class="flex flex-col items-center">
      <no-contact v-if="store.emails.length == 0" />
      <router-link
        :to="{ name: 'addContact' }"
        class="flex items-center justify-center px-4 py-2 font-semibold text-white bg-blue-700 rounded-md"
      >
        <plus-small-icon class="w-6 h-6" />
        <span>Add contact</span>
      </router-link>
    </div>
    <div v-if="store.emails?.length >= 1" class="flex flex-wrap justify-start gap-5 pt-5">
      <div
        v-for="(email, index) in store.emails"
        :key="index"
        class="border pt-5 rounded shadow-sm w-[255px] h-[320px] flex flex-col items-center"
      >
        <img
          src="https://avatars.dicebear.com/api/avataaars/719ba5427402c.svg"
          alt=""
          width="120"
          height="120"
        />
        <h2 class="my-6 font-bold">{{ email }}</h2>
        <p class="px-2 bg-green-300 rounded-xl">test</p>
        <div class="flex justify-start w-full mt-auto">
          <div class="flex justify-center w-full py-2 border rounded-bl">
            <envelope-icon class="w-5 h-5 text-gray-400" />
          </div>
          <div class="flex justify-center w-full py-2 border">
            <phone-icon class="w-5 h-5 text-gray-400" />
          </div>
          <button
            @click="store.deleteContact(index)"
            class="flex justify-center w-full py-2 border"
          >
            <trash-icon class="w-5 h-5 text-red-400" />
          </button>
          <div class="flex justify-center w-full py-2 border rounded-br">
            <pencil-icon class="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
