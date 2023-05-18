<template>
  <ion-page>
    <ion-content>
      <h2>Logout page</h2>
      <ion-button @click="unloger"> Log out </ion-button>
    </ion-content>  
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent } from '@ionic/vue'
import { useLoginStore } from "../stores/login";
export default {
  components: {IonPage, IonButton, IonContent },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  methods: {
    unloger() {
      this.logout()
      this.$router.push("/")
    }
  }
}
</script>

<style>

</style>
