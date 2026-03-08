
<script setup lang="ts">

import { useRoute } from 'vue-router';
import { Detalles3d } from './detalles3d';

const route = useRoute()

const id = Number(route.params.id)

const detalle = Detalles3d.find(d => d.id === id)

</script>




<template>
    <div>
        <h1> {{ detalle?.proceso }}</h1>
    </div>
</template>



<style scoped>

</style>