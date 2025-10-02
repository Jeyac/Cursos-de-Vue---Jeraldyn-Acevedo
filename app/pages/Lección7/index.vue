<script setup>
import { ref } from 'vue'
definePageMeta({ alias: ['/leccion7'] })

let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Aprender HTML' },
  { id: id++, text: 'Aprender React' },
  { id: id++, text: 'Aprender Vue' },
  { id: id++, text: 'Aprender CSS' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="Agrega algo nuevo">
    <button>Agregar</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>