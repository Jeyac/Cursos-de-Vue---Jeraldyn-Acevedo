<script setup>
import { ref } from 'vue'
definePageMeta({ alias: ['/leccion4'] })

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">Contador es: {{ count }}</button>
</template>