<template>
  <ion-page>
    <ion-content>
      <h2>System page</h2>
      <ion-list v-for="e in lista" :key="e.id">
        {{ e.id }} {{ e.nombre }}
      </ion-list>
      <ion-input v-model="jugador.id" label="Numero" placeholder="numero de jugador"></ion-input>
      <ion-input v-model="jugador.nombre" label="Nombre" placeholder="nombre de jugador"></ion-input>
      <ion-button @click="agregarJugador">Agregar a la lista</ion-button>
      <ion-button expand="block" @click="irAbout">Ir a About</ion-button>
    </ion-content>  
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonInput, IonList, IonContent} from '@ionic/vue'
export default {
  components: {IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      lista: [{id:1, nombre:'Filioll'},{id:5, nombre: 'Gallego'},{id:9, nombre: 'Kempes'}],
      jugador: {}
    }
  },
  methods: {
    irAbout() {
      this.$router.push("/about")
    },
    agregarJugador() {

      this.lista.push({...this.jugador})
      this.jugador = {}
    }
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