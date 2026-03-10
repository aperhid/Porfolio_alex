
<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card';

import { Trabajo3d } from './datos';

import { CircleChevronLeft, CircleChevronRight, } from 'lucide-vue-next';

import { listaDetalles } from '@/components/composables/listaDetalles'

const {
  paginaActual,
  totalPaginas,
  listaPaginada: lista3d,
  irALaPagina
} = listaDetalles(Trabajo3d, 2)


</script>

<template>
    
  <div class="flex flex-col items-center justify-center max-w-350 my-3 mx-auto">
    <div class="text-center mt-8">
        <h1 class="fuente text-5xl sm:text-6xl md:text-7xl transition-all text-white pointer-events-none">Diseño 3d</h1>
        <h2 class="font-bold text-lg sm:text-xl md:text-2xl transition-all text-white pointer-events-none mt-5">¡Haz click en una tarjeta para ver los detalles!</h2>
    </div>

    <div class="flex flex-col md:flex-row items-center ">

        <div>
            <button
            @click="irALaPagina(paginaActual - 1)"
            :disabled="paginaActual === 1" 
            :class="['relative mt-5 mb-5 sm:mt-10 md:mr-20 md:mt-20 flex items-center justify-center rounded-full backdrop-blur-md transition-all', 
                paginaActual === 1
                    ? 'opacity-0'
                    : 'text-white hover:scale-110 sm:hover:text-[#d8720b] hover:text-black cursor-pointer'
            ]">
                <CircleChevronLeft class="w-10 h-10 md:w-13 md:h-13"/>
            </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-20 mx-auto">
            <RouterLink
            v-for="Trabajo3d in lista3d"
            :key="Trabajo3d.id"
            :to="{ name: 'detalles-explicacion-3d', params: { id: Trabajo3d.id } }"
            >
                <Card 
                class="sm:mt-15 cursor-pointer w-full sm:w-65 md:w-70 md:h-90 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm hover:scale-105 transition-all hover:shadow-[0_0_20px_#d8720b]"
                >
                    <CardContent 
                    class="flex flex-col gap-3 w-full"
                    >
                    <img 
                    :src="`/imagenes/trabajos/3d/${ Trabajo3d.imagen }`" 
                    alt=""
                    class="w-full sm:w-56 md:w-60 h-64 sm:h-70 md:h-70 rounded-lg"
                    >
                    <h2 class="text-white text-center text-lg "> {{ Trabajo3d.titulo }} </h2>   
                </CardContent>
            </Card> 
            </RouterLink>
        </div>

        <div>
            <button
            @click="irALaPagina(paginaActual + 1)"
            :disabled="paginaActual === totalPaginas"  
            :class="['relative mb-5 md:ml-20 mt-5 md:mt-20 sm:mt-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all',
                paginaActual === totalPaginas
                    ? 'opacity-0'
                    : 'text-white hover:scale-110 hover:text-[#d8720b] cursor-pointer'
            ]">
                <CircleChevronRight class="w-10 h-10 md:w-13 md:h-13"/>
            </button>
        </div>

    </div>

    
  </div>


</template>



<style scoped>

.fuente {
    font-family: outfit-SemiBold;
}

</style>