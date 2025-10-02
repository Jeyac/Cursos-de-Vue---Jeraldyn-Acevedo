<script setup>
import { ref, onMounted } from 'vue'
definePageMeta({ alias: ['/leccion9'] })

const pElementRef = ref(null)

onMounted(() => {
  // Cambiar el texto
  pElementRef.value.textContent = '¡Ya estoy montado!'
  // Cambiar color y tamaño directamente con estilo
  pElementRef.value.style.color = 'blue'
  pElementRef.value.style.fontSize = '24px'
  pElementRef.value.style.fontWeight = 'bold'
})
</script>

<template>
  <p ref="pElementRef">Antes de montar</p>
</template>
