
<script setup lang="ts">

import { router } from '@/router'

import { trabajo3d } from './datos';


</script>

<template>
    <div class="grid grid-row-2 md:grid-cols-3 gap-8 mx-auto">
        <Card class="cursor-pointer w-[220px] h-[240px] hover:bg-[#ee3133] hover:text-white transition-colors"
            >
            <CardContent 
            class="flex flex-col items-center gap-1 w-full px-0"
            v-for="proyecto3d in trabajo3d"
            :key="proyecto3d.id"
                >
                    <img class="w-48 h-42 object-cover object-top mt-2 bg-[#ffde00] rounded-t-md border border-black"
                    :src="`/imagenes/trabajos/3d/${ proyecto3d.imagen }`" 
                    >
                    <h2 class="font-medium text-lg">{{ proyecto3d.titulo }}</h2>
            </CardContent>
        </Card>

    </div>

    <div>
         <Button class="bg-[#ee3133] hover:bg-[#ffde00] focus:bg-[#ffde00]">
                <RouterLink to="trabajos_detalles">
                Exit
            </RouterLink>
        </Button>
    </div>
</template>



<style scoped>

</style>