<template>
  <div class="cargarPersonaje">
    <b-container>
      <br>
      <h1 class="text-center">Cargar Personaje</h1>
      <b-form class="w-50 p-3 mb-1" @submit.prevent>
        <b-form-group label="Episodio:">
          <b-form-input type="text" v-model="episodio" disabled></b-form-input>
        </b-form-group>

        <b-form-group label="Personaje:">
          <b-form-input type="text" v-model="personaje"></b-form-input>
        </b-form-group>

        <b-button @click="postPersonaje()" type="submit" variant="primary">Guardar</b-button>
        <br>
        <br>
        <br>
        <b-form-group @submit.prevent="getPersonajeEps()">
          <h1>Personajes en el episodio</h1>
           <b-list-group class="mt-2" v-for="item in personajeEps" :key=item>           
            <b-card-group deck>
              <b-card header-tag="header" footer-tag="footer">
                <b-card-text class="text-center">{{item}}</b-card-text>
                <b-button @click="deletePersonaje(item)" variant="danger">Eliminar</b-button>              
              </b-card>
            </b-card-group>
          </b-list-group>
        </b-form-group>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "personaje",
  data() {
    return {
      episodio: this.$route.params.id,
      personaje: "",
      personajeEps: []
    };
  },
  created() {
    this.getPersonajeEps();
  },
  mounted() {},
  computed: {},
  methods: {
    deletePersonaje(personaje){
      var _this=this;
      axios.delete("http://localhost:3000/baja/"+this.episodio+"/"+ personaje
      ).then(function(res){
        _this.getPersonajeEps();
        console.log(res)
      }).catch(function(err){
        console.log(err)
      })
    },
    postPersonaje() {
      var _this=this;
      axios
        .post("http://localhost:3000/cargar", {
          episodio: this.episodio,
          personaje: this.personaje
        })
        .then(function(res) {
          _this.getPersonajeEps();
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getPersonajeEps() {
      console.log("anda");
      axios
        .get("http://localhost:3000/listar?episodio="+this.episodio)
        .then(response => {
          console.log("anda2")
          console.log(response.data);
          this.personajeEps = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>

</style>