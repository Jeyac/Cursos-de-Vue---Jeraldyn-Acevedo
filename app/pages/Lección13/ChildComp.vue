<script setup>
const emit = defineEmits(['response'])

function reply() {
  emit('response', 'Mensaje desde el hijo.')
}
</script>

<template>
  <div>
    <button @click="reply">Responder al padre</button>
  </div>
  </template>


