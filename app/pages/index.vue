<template>
  <div>
    <section class="hero">
      <h1 class="hero-title">Curso sobre Vue</h1>
      <p class="hero-subtitle">By Jéraldyn Acevedo</p>
    </section>
    
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="card lessons-overview">
            <div class="card-header">
              <h2 class="mb-0">
                <i class="fas fa-graduation-cap me-2"></i>
                Descripción de las lecciones
              </h2>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-lg-4 mb-3" v-for="lesson in lessonsInfo" :key="lesson.number">
                  <div class="lesson-card">
                    <div class="lesson-header">
                      <h5 class="lesson-title">
                        <i class="fas fa-play-circle me-2"></i>
                        Lección {{ lesson.number }}
                      </h5>
                    </div>
                    <p class="lesson-description">{{ lesson.description }}</p>
                    <NuxtLink :to="`/leccion${lesson.number}`" class="btn btn-lesson">
                      Ver Lección
                      <i class="fas fa-arrow-right ms-1"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const lessonsInfo = [
  { number: 1, description: "Introducción a Vue.js y conceptos básicos" },
  { number: 2, description: "Reactivity y refs - Estado reactivo" },
  { number: 3, description: "Class binding - Clases dinámicas" },
  { number: 4, description: "Event handling - Manejo de eventos" },
  { number: 5, description: "Conditional rendering - Renderizado condicional" },
  { number: 6, description: "List rendering - Listas y v-for" },
  { number: 7, description: "Computed properties - Propiedades calculadas" },
  { number: 8, description: "Lifecycle hooks - Ciclo de vida" },
  { number: 9, description: "Template refs - Referencias de template" },
  { number: 10, description: "Watchers - Observadores reactivos" },
  { number: 11, description: "Componentes - Creación y uso básico" },
  { number: 12, description: "Props - Pasar datos a componentes" },
  { number: 13, description: "Emits - Comunicación hijo-padre" },
  { number: 14, description: "Slots - Contenido dinámico en componentes" },
  { number: 15, description: "Lecciones terminadas!" }
]
</script>
