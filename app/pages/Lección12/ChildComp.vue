<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: 'Se utiliza si el padre no envía nada :b'
  }
})
</script>

<template>
  <div>
    <h2>{{ props.msg }}</h2>
    <p>Este es un componente hijo para la Lección 12.</p>
  </div>
  </template>


