<template>
  <div>
    Detalle
    id: <input type="number" v-model="elemento.id">
    descripcion: <input type="text" v-model="elemento.desc">
    <button v-on:click="agregarProyecto">Agregar Proyecto</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            elemento: {}
        }
    },
    methods: {
        agregarProyecto() {
            // validaciones de input
            this.$emit('agregarAlista',{...this.elemento})
        }
    }
}
</script>

<style>

</style>