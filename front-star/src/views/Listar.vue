<template>
  <div class="listar">
    <CargarPersonaje/>
  </div>
</template>

<script>
// @ is an alias to /src
import CargarPersonaje from '@/components/Cargarpersonaje.vue'

export default {
  name: 'Listar',
  components: {
    CargarPersonaje
  }
}
</script>