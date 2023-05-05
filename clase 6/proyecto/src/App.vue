<script>
import { RouterLink, RouterView } from 'vue-router'
import {IonApp, IonHeader, IonRouterOutlet} from '@ionic/vue'
export default {
  components: {IonApp, IonHeader, IonRouterOutlet}
}
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/about">About |</RouterLink>
      <RouterLink to="/system">System</RouterLink>
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
</style>
