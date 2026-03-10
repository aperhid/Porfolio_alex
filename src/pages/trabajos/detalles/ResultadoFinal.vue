<script setup lang="ts">

import { identificadorDetalles } from '@/components/composables/identificadorDetalles';

const { detalle } = identificadorDetalles()

</script>




<template>
    <div class="grid grid-cols-3 gap-10">
        <img
        class="rounded object-container"
        v-for="(img, i) in detalle?.resultado"
        :key="i"
        :src="`/imagenes/trabajos/resultado/${img}`"
        />
    </div>
</template>



<style scoped>

</style>