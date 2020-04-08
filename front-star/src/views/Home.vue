<template>

  <div class="home">	
    <br>
    <b-img center src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Star_Wars_-_The_Rise_of_Skywalker_logo.png/320px-Star_Wars_-_The_Rise_of_Skywalker_logo.png" alt="Center image"></b-img>
    <Listar msg="Welcome to Your Listado Bro App"/>
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

<style scoped>
</style>