<script setup>
import { ref } from 'vue'
definePageMeta({ alias: ['/leccion5'] })

const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Escribe algo">
  <p>{{ text }}</p>
</template>