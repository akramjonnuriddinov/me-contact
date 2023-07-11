<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { EnvelopeIcon, PhoneIcon, TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'

const store = useCounterStore()

defineProps({
  contacts: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    v-for="(contact, index) in contacts"
    :key="index"
    class="border pt-5 rounded shadow-sm w-[255px] h-[320px] flex flex-col items-center"
  >
    <img
      class="rounded-full"
      src="https://api.dicebear.com/6.x/open-peeps/svg?seed=Ginger"
      width="120"
      height="120"
    />
    <h2 class="my-6 font-bold">{{ contact.username }}</h2>
    <p
      class="text-center text-gray-600 max-w-[200px] px-4 overflow-hidden truncate bg-green-100 rounded-xl"
    >
      {{ contact.email }}
    </p>
    <div class="flex justify-start w-full mt-auto">
      <div class="flex justify-center w-full py-2 border rounded-bl">
        <a :href="'mailto:' + contact.email">
          <envelope-icon class="w-5 h-5 text-orange-300" />
        </a>
      </div>
      <div class="flex justify-center w-full py-2 border">
        <a :href="'tel:' + contact.phone_number">
          <phone-icon class="w-5 h-5 text-green-400" />
        </a>
      </div>
      <button @click="store.deleteContact(index)" class="flex justify-center w-full py-2 border">
        <trash-icon class="w-5 h-5 text-red-400" />
      </button>
      <div class="flex justify-center w-full py-2 border rounded-br">
        <pencil-icon class="w-5 h-5 text-blue-400" />
      </div>
    </div>
  </div>
</template>
