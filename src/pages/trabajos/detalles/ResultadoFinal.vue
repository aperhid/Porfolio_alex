<script setup lang="ts">


import { useRoute } from 'vue-router';

import { Detalles3d, type detalles3d } from './detalles3d'
import { DetallesGrafico, type detallesGrafico } from './detallesGrafico'
import { DetallesIlustracion, type detallesIlustracion } from './detallesIlustracion'

const route = useRoute()

const id = Number(route.params.id)

let categoria: (detalles3d | detallesGrafico | detallesIlustracion)[] = []

if (route.name?.toString().includes('3d')) {
  categoria = Detalles3d
}

if (route.name?.toString().includes('grafico')) {
  categoria = DetallesGrafico
}

if (route.name?.toString().includes('ilustracion')) {
  categoria = DetallesIlustracion
}

const detalle = categoria.find(d => d.id === id)

</script>




<template>
    <div>
        <h1> {{ detalle?.resultado }}</h1>
    </div>
</template>



<style scoped>

</style>