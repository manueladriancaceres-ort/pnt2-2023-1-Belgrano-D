<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader, IonContent, IonRouterOutlet } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";

export default {
  components: { IonApp, IonHeader, IonContent, IonRouterOutlet },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions, isLoginn } = store
    return { store, isLogin, user, hasPermissions, isLoginn };
  },
};
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/about">About |</RouterLink>
      <RouterLink v-if="isLogin" to="/system">System |</RouterLink>
      <RouterLink v-if="isLogin && hasPermissions('config')" to="/config">Config |</RouterLink>
      <RouterLink v-if="!isLogin" to="/login">Login |</RouterLink>
      <RouterLink v-if="isLogin" to="/logout">Logout</RouterLink>
      Usuario: {{ user.email }}
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>  
  </ion-app>
</template>

<style>
</style>
