<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Listar msg="Welcome to Your Listao vro App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Listar from '@/components/Listarepisodios.vue'

export default {
  name: 'Home',
  components: {
    Listar
  }
}
</script>
