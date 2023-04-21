<template>
  <div>
    <h2>System</h2>
    <li v-for="e in lista" :key="e">
        {{ e }}
    </li>
    <Detail @agregarElem="agregar"/>
  </div>
</template>

<script>
import Detail from './Detail.vue'
export default {
    data() {
        return {
            lista: []
        }
    },
    components: {
        Detail
    },
    methods: {
        agregar(elemento) {
            this.lista.push(elemento)
        }
    }
}
</script>

<style>

</style>