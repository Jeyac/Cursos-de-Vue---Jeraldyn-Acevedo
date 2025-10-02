<script setup>
import { ref, watch } from 'vue'

const route = useRoute()
const lessons = Array.from({ length: 15 }, (_, idx) => idx + 1)

// Variables reactivas
const currentLesson = ref(null)

// Función para determinar si una lección está activa
const isActiveLesson = (lessonNumber) => {
  return route.path === `/leccion${lessonNumber}` || route.path === `/Lección${lessonNumber}`
}

// Función para obtener el número de lección actual
const getCurrentLessonNumber = () => {
  const match = route.path.match(/leccion(\d+)/i)
  return match ? parseInt(match[1]) : null
}

// Actualizar la lección actual cuando cambie la ruta
const updateCurrentLesson = () => {
  currentLesson.value = getCurrentLessonNumber()
}

// Inicializar
updateCurrentLesson()

// Observar cambios en la ruta
watch(() => route.path, () => {
  updateCurrentLesson()
})
</script>

<template>
  <nav class="navbar navbar-expand-lg professional-navbar">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand professional-brand" to="/">
        <i class="fas fa-graduation-cap brand-icon"></i>
        <span class="brand-text">Curso Vue</span>
      </NuxtLink>
      
      <button class="navbar-toggler professional-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link professional-link" to="/">
              <i class="fas fa-home"></i>
              <span>Inicio</span>
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle professional-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-book"></i>
              <span v-if="currentLesson">Lección {{ currentLesson }}</span>
              <span v-else>Lecciones</span>
              <i class="fas fa-chevron-down dropdown-arrow"></i>
            </a>
            <ul class="dropdown-menu professional-dropdown">
              <li v-for="n in lessons" :key="n">
                <NuxtLink 
                  class="dropdown-item professional-dropdown-item" 
                  :class="{ 'active-lesson': isActiveLesson(n) }"
                  :to="`/leccion${n}`"
                >
                  <i class="fas fa-play-circle" v-if="!isActiveLesson(n)"></i>
                  <i class="fas fa-check-circle" v-else></i>
                  <span>Lección {{ n }}</span>
                  <span v-if="isActiveLesson(n)" class="current-badge">Actual</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

