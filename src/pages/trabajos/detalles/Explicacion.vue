
<script setup lang="ts">

import { identificadorDetalles } from '@/components/composables/identificadorDetalles';

const { detalle } = identificadorDetalles()

</script>




<template>
      <p class="text-white pointer-events-none" style="white-space: pre-line"> {{ detalle?.explicacion }}</p>
</template>



<style scoped>

</style>