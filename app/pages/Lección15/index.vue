<script setup>
import { onMounted } from 'vue'
definePageMeta({ alias: ['/leccion15'] })

let confetti

function showConfetti() {
  if (confetti) {
    confetti.addConfetti()
  }
}

onMounted(async () => {
  const { default: JSConfetti } = await import('js-confetti')
  confetti = new JSConfetti()
})
</script>

<template>
  <h1 @click="showConfetti">🎉 Lo completé :)! (Presioneme para que salga confetti)</h1>
</template>

<style>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>