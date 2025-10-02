<template>
  <div>
    <Head>
      <Title>Curso Vue - By Jéraldyn Acevedo</Title>
      <Meta name="description" content="Curso completo de Vue.js con 15 lecciones prácticas" />
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </Head>
    
    <AppNavbar />
    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  text-align: center;
}
</style>
  
