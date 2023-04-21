<template>
  <div>
    Detail
    <br/>
    Elemento <input type="text" v-model="elemento">
    <button v-on:click="agregarElemento">Agregar</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            elemento: ''
        }
    },
    methods: {
        agregarElemento() {
            this.$emit('agregarElem',{...this.elemento})
        }
    }
}
</script>

<style>

</style>