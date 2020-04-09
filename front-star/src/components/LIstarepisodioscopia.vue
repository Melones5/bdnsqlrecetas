<template>
  <b-container class="bv-example-row">
      <h1 class="text-center">Lista de episodios</h1>
    <b-row class="mt-5">
        <b-col cols="12" md="4">
            <b-card
             img-src="https://i.pinimg.com/originals/8b/e3/9c/8be39cb0d107b494b08388cf4441fdeb.jpg"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio I</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="https://vignette.wikia.nocookie.net/es.starwars/images/7/7c/Episode_two_poster.jpg/revision/latest?cb=20060405025053"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio II</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="http://observandocine.com/wp-content/uploads/2015/11/star-wars-iii.jpg"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio III</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="https://images-na.ssl-images-amazon.com/images/I/51ozACaq1wL._SY445_.jpg"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio IV</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4tE9541wp3NqPnctlve6gl5znZuHbx6wMcEl4RfiRTBvuM9T"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio V</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="https://http2.mlstatic.com/star-wars-episodio-vi-6-el-regreso-del-jedi-pelicula-dvd-D_NQ_NP_703639-MLM29297571127_012019-F.jpg"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio VI</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="https://cloud10.todocoleccion.online/cine-posters-carteles/tc/2016/07/13/20/57998112.jpg"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio VII</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             img-src="https://i.pinimg.com/originals/15/7a/c4/157ac48ed21f5545615340715863b681.jpg"
             img-top
             style="max-width: 20rem;"
             class="mb-2"
            >
            <p>Episodio VIII</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        <b-col cols="12" md="4">
            <b-card
             style="max-width: 21rem;"
             img-src="https://i.blogs.es/182def/star-wars-el-despertar-de-la-fuerza-star-wars-force-awakens-poster-finali/450_1000.jpg"
             img-top
             class="mb-2"
            >
            <p>Episodio IX</p>
            <b-button :to="{name: 'Listar'}" variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
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
                  id: "1",
                  imagen: "https://vignette.wikia.nocookie.net/es.starwars/images/7/7c/Episode_two_poster.jpg/revision/latest?cb=20060405025053",
                  episodio: "I",
              },
              {
                  id: "2",
                  imagen: "https://vignette.wikia.nocookie.net/es.starwars/images/7/7c/Episode_two_poster.jpg/revision/latest?cb=20060405025053",
                  episodio: "II",
              }
          ]
      }
  }
}
</script>

<style scoped>


</style>

