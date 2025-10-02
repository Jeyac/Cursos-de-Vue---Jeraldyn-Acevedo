<script setup>
import { ref, watch } from 'vue'
definePageMeta({ alias: ['/leccion10'] })

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>ID de tarea: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Obtener siguiente tarea</button>
  <p v-if="!todoData">Cargando...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
