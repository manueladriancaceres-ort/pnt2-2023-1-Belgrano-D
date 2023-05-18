<template>
  <ion-page>
    <ion-content>
      <h2>System page</h2>
      <ion-list v-for="e in lista" :key="e.id">
        {{ e.id }} {{ e.descripcion }}
        <ion-button @click="eliminar(e.id)">Eliminar</ion-button>
        <ion-button @click="modificar(e.id)">Modificar</ion-button>
      </ion-list>
      <ion-input v-model="elemento.id" label="Id" placeholder="id"></ion-input>
      <ion-input v-model="elemento.descripcion" label="Descripcion" placeholder="descripcion"></ion-input>
      <ion-button @click="agregarElemento">Agregar a la lista</ion-button>
      <ion-button @click="cargarLista">Cargar lista</ion-button>
    </ion-content>  
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonInput, IonList, IonContent} from '@ionic/vue'
import listaService from '../service/listaService'

export default {
  components: {IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      lista: [],
      elemento: {}
    }
  },
  mounted() {
    this.cargarLista()
  },
  methods: {
    irAbout() {
      this.$router.push("/about")
    },
    async cargarLista() {
      try {
        this.lista = await listaService.cargarLista()
      } catch (error) {
        alert('error de conexion')
      }
    },
    async agregarElemento() {
      const elemento = {...this.elemento}
      try {
        await listaService.agregarElemento(elemento)
        this.cargarLista()
        this.elemento = {}
      } catch (error) {
        alert(error)
        console.log(error);
      }
    },
    async eliminar(id) {
      try {
        await listaService.eliminarElemento(id)
        this.cargarLista()
      } catch (error) {
        alert('error de conexion')
      }
    },
    async modificar(id) {
      const elemento = {...this.elemento}
      try {
        await listaService.modificarElemento(id,elemento)
        this.cargarLista()
      } catch (error) {
        alert('error de conexion')
      }
    },
  }
}
</script>

<style>
/*
ion-button {
  --background: #250e4b;
  --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;

  --color: blue;

  --border-radius: 0;
  --border-color: #000;
  --border-style: solid;
  --border-width: 1px;

  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

  --ripple-color: deeppink;

  --padding-top: 10px;
  --padding-bottom: 10px;
}
*/
</style>