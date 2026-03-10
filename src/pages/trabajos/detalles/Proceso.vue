
<script setup lang="ts">

import { identificadorDetalles } from '@/components/composables/identificadorDetalles';

const { detalle } = identificadorDetalles()

</script>




<template>
    <div class="grid grid-cols-3 gap-10">
        <img
        class="rounded object-container"
        v-for="(img, i) in detalle?.proceso"
        :key="i"
        :src="`/imagenes/trabajos/proceso/${img}`"
        />
    </div>
</template>



<style scoped>

</style>