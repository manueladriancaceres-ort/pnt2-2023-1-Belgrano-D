<template>
  <div>
    <p>Lista de Proyectos</p> 
    <li v-for="proy in proyectos" v-bind:key="proy.id">
        {{proy.id}} {{proy.desc}}
    </li>
    <button v-on:click="ordenarPorId">Ordenar por id</button>
    <br/>
    <ProyectoDetalle @agregarAlista="agregarProyecto"/>
  </div>
</template>

<script>
import ProyectoDetalle from './ProyectoDetalle.vue'
export default {
    components: {ProyectoDetalle},
    data() {
        return {
            proyectos: [{id:3,desc:'Marketing whatsapp'},
                        {id:1,desc:'Gestion Carta'},
                        {id:2,desc:'CRM consulta api'}],
        }
    },
    methods: {
        agregarProyecto(elemento) {
            this.proyectos.push(elemento)
        },
        ordenarPorId() {
            this.proyectos.sort((a,b)=>a.id-b.id)
        }
    }
}
</script>

<style>

</style>