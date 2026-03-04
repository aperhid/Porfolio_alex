

<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card';

import { trabajoIlustracion, type proyectoIlustracion } from './datos';

import { ref } from 'vue';

const listailustracion = ref<proyectoIlustracion[]>(trabajoIlustracion.slice(0, 2) )

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 max-w-350 my-8 mx-auto">
    <div class="text-center">
        <h1 class="font-bold text-2xl text-white mb-5">¡Haz click en una tarjeta para ver los detalles!</h1>
    </div>

    <div class="grid grid-cols-2 gap-10 mx-auto">
        <Card 
        class="cursor-pointer w-60 h-65 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm hover:scale-105 transition-all hover:shadow-[0_0_20px_#d8720b]"
        v-for="proyectoIlustracion in listailustracion"
        >
            <CardContent class="flex flex-col items-center gap-3 w-full">
                <img 
                :src="`/imagenes/Home/trabajos/3d/${ proyectoIlustracion.imagen }`" 
                alt=""
                class="w-50 h-45 rounded-lg"
                >
                <h2 class="font-medium text-lg"> {{ proyectoIlustracion.titulo }} </h2>
                
            </CardContent>
        </Card>   
    </div>
    
  </div>


</template>



<style scoped>

</style>