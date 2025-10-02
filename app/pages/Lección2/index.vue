<script setup>
import { reactive, ref } from 'vue'
definePageMeta({ alias: ['/leccion2'] })

const counter = reactive({ count: 0 })
const message = ref('FC Barcelona el mejor club del mundo <3!')
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>
</template>