
<script setup lang="ts">

import { identificadorDetalles } from '@/components/composables/identificadorDetalles';

const { detalle } = identificadorDetalles()

</script>




<template>
    <div class="grid grid-cols-3 gap-10">
        <img
        class="rounded object-cover"
        v-for="(img, i) in detalle?.bocetos"
        :key="i"
        :src="`/imagenes/trabajos/bocetos/${img}`"
        />
    </div>
</template>



<style scoped>

</style>