<template>
  <div>
    <b-container>
      <h1>Cargar Personaje</h1>
      <b-form @submit.prevent>
        <b-form-group label="Episodio:">
          <b-form-input type="text" v-model="episodio"></b-form-input>
        </b-form-group>

        <b-form-group label="Personaje:">
          <b-form-input type="text" v-model="personaje"></b-form-input>
        </b-form-group>

        <b-button @click="postPersonaje()" type="submit" variant="primary">Guardar</b-button>
        <!--<b-button type="reset" variant="danger">Eliminar</b-button>-->

        <b-form-group @submit.prevent="getPersonajeEps()">
          <h1>personajes en el episodio</h1>
          <b-card-group deck>
            <b-card title="Personaje" header-tag="header" footer-tag="footer">
              <b-card-text>personaje</b-card-text>
              <b-button href="#" variant="danger">Eliminar</b-button>              
            </b-card>
          </b-card-group>

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
      episodio: "",
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
    postPersonaje() {
      axios
        .post("http://localhost:3000/cargar", {
          episodio: this.episodio,
          personaje: this.personaje
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getPersonajeEps() {
      console.log("anda");
      axios
        .get("http://localhost:3000/listar?episodio=I")
        .then(response => {
          console.log("anda2");
          this.PersonajeEps = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>