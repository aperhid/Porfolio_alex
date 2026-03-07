

<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card';

import { trabajoIlustracion } from './datos';

import { computed, ref } from 'vue';
import { CircleChevronLeft, CircleChevronRight, } from 'lucide-vue-next';


const enPagina = 2

const paginaActual = ref(1)

const totalPaginas = Math.ceil(trabajoIlustracion.length / enPagina)

const lista3d = computed(() => {
    const inicio = (paginaActual.value - 1) * enPagina
    const fin = inicio + enPagina
    return trabajoIlustracion.slice(inicio, fin)
})

const irALaPagina = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginas)
        paginaActual.value = pagina
}


</script>

<template>
    
  <div class="flex flex-col items-center justify-center max-w-350 my-3 mx-auto">
    <div class="text-center mt-8">
        <h1 class="font-bold text-7xl text-white pointer-events-none">ilustración</h1>
        <h2 class="font-bold text-2xl text-white pointer-events-none mt-5">¡Haz click en una tarjeta para ver los detalles!</h2>
    </div>

    <div class="flex items-center">

        <div>
            <button
            @click="irALaPagina(paginaActual - 1)"
            :disabled="paginaActual === 1" 
            :class="['relative mr-20 mt-20 flex items-center justify-center rounded-full backdrop-blur-md transition-all', 
                paginaActual === 1
                    ? 'opacity-0'
                    : 'text-white hover:scale-110 hover:text-[#d8720b] cursor-pointer'
            ]">
                <CircleChevronLeft class="w-13 h-13"/>
            </button>
        </div>

        <div class="grid grid-cols-2 gap-20 mx-auto">
            <RouterLink
            v-for="trabajoIlustracion in lista3d"
            :key="trabajoIlustracion.id"
            to="/Diseño_3d/detalles"
            >
                <Card 
                class="mt-15 cursor-pointer w-70 h-90 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm hover:scale-105 transition-all hover:shadow-[0_0_20px_#d8720b]"
                >
                    <CardContent class="flex flex-col items-center gap-3 w-full">
                        <img 
                        :src="`/imagenes/Home/trabajos/3d/${ trabajoIlustracion.imagen }`" 
                        alt=""
                        class="w-60 h-70 rounded-lg"
                        >
                        <h2 class="font-medium text-white text-lg"> {{ trabajoIlustracion.titulo }} </h2>
                    </CardContent>
                </Card>     
            </RouterLink>
        </div>

        <div>
            <button
            @click="irALaPagina(paginaActual + 1)"
            :disabled="paginaActual === totalPaginas"  
            :class="['relative ml-20 mt-20 flex items-center justify-center rounded-full backdrop-blur-md transition-all',
                paginaActual === totalPaginas
                    ? 'opacity-0'
                    : 'text-white hover:scale-110 hover:text-[#d8720b] cursor-pointer'
            ]">
                <CircleChevronRight class="w-13 h-13"/>
            </button>
        </div>

    </div>

    
    
    
  </div>


</template>



<style scoped>

</style>