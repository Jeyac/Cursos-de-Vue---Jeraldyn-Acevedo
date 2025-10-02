<script setup>
import { ref } from 'vue'
definePageMeta({ alias: ['/leccion6'] })

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">Interruptor</button>
  <h1 v-if="awesome">Aprobado!</h1>
  <h1 v-else>Reprobado:(</h1>
</template>
