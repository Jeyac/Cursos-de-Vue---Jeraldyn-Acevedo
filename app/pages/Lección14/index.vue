<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'
definePageMeta({ alias: ['/leccion14'] })

const msg = ref('Del padre')
</script>

<template>
  <ChildComp>Mensaje: {{ msg }}</ChildComp>
</template>