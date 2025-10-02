<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'
definePageMeta({ alias: ['/leccion13'] })

const childMsg = ref('No hay mensaje del hijo')
</script>

<template>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>