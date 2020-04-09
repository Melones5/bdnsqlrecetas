<template>
  <b-container class="bv-example-row">
    <br>  
    <b-row>
        <b-list-group v-for="item in episodios" :key=item>
        <b-col>
            <b-card
             v-bind:img-src="item.imagen"
             img-top
             style="max-height 5rem ; max-width: 15rem;"
             class="mb-2"
            >
            <b-button @click="agregarNuevo(item.episodio)" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        </b-list-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Listar',
  data(){
      return{
          episodios: [
              {
                  id: 1,
                  imagen: "https://i.pinimg.com/originals/8b/e3/9c/8be39cb0d107b494b08388cf4441fdeb.jpg",
                  episodio: "I",
                  nombre: "El imperio contrataca"
              },
              {
                  id: 2,
                  imagen: "https://vignette.wikia.nocookie.net/es.starwars/images/7/7c/Episode_two_poster.jpg/revision/latest?cb=20060405025053",
                  episodio: "II",
              },
              {
                  id: 3,
                  imagen: "http://observandocine.com/wp-content/uploads/2015/11/star-wars-iii.jpg",
                  episodio: "III",
              },
              {
                  id: 4,
                  imagen: "https://images-na.ssl-images-amazon.com/images/I/51ozACaq1wL._SY445_.jpg",
                  episodio: "IV",
              },
              {
                  id: 5,
                  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4tE9541wp3NqPnctlve6gl5znZuHbx6wMcEl4RfiRTBvuM9T",
                  episodio: "V",
              },
              {
                  id: 6,
                  imagen: "https://http2.mlstatic.com/star-wars-episodio-vi-6-el-regreso-del-jedi-pelicula-dvd-D_NQ_NP_703639-MLM29297571127_012019-F.jpg",
                  episodio: "VI",
              },
              {
                  id: 7,
                  imagen: "https://cloud10.todocoleccion.online/cine-posters-carteles/tc/2016/07/13/20/57998112.jpg",
                  episodio: "VII",
              },
              {
                  id: 8,
                  imagen: "https://i.blogs.es/182def/star-wars-el-despertar-de-la-fuerza-star-wars-force-awakens-poster-finali/450_1000.jpg",
                  episodio: "VIII",
              },
              {
                  id: 9,
                  imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-episode-ix-poster-filtrado-1553717967.jpg?crop=1xw:1xh;center,top&resize=480:*",
                  episodio: "IX",
              }
          ]
      }
  },
  methods: {
      agregarNuevo(episodio){
          console.log(episodio)
          this.$router.push('/listar/'+ episodio)
      }
  }
}
</script>

<style scoped>

</style>

