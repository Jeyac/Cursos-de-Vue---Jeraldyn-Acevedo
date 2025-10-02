<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'
definePageMeta({ alias: ['/leccion12'] })

const greeting = ref('Hola de parte del padre')
</script>

<template>
  <ChildComp :msg="greeting" />
</template>