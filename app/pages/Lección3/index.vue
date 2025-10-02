<script setup>
import { ref } from 'vue'
definePageMeta({ alias: ['/leccion3'] })

const titleClass = ref('title')
const subtitleClass = ref('subtitle')
</script>

<template>
  <h1 :class="titleClass">Hazme rojo</h1>
  <h2 :class="subtitleClass">Hazme azul</h2>
</template>

<style>
.title {
  color: red;
}

.subtitle {
  color: blue;
}
</style>
