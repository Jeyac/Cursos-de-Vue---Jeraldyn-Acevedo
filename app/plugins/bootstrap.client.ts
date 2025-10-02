// Plugin sólo en cliente para inicializar componentes JS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(() => {
  // No-op: la importación con side-effect habilita Dropdown/Collapse, etc.
})

