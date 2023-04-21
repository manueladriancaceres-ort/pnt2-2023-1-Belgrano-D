<script>
  import Head from './components/Head.vue'
  import Footer from './components/Footer.vue'
  import System from './components/System.vue'

  export default {
    components: {
      Head, Footer, System
    },
    data() {
      return {
        autor: 'PNT2'
      }
    }
  }
</script>

<template>
  <Head/>
  <br/>
  <System/>
  <br/>
  <Footer :autor="autor"/>
</template>

<style scoped>
</style>
