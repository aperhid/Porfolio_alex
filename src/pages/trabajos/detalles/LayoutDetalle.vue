<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

let categoria = ''

if (route.path.includes('Diseño_3d')) {
  categoria = '3d'
}

if (route.path.includes('Diseño_gráfico')) {
  categoria = 'grafico'
}

if (route.path.includes('ilustracion')) {
  categoria = 'ilustracion'
} 


const rutaExplicacion = `detalles-explicacion-${categoria}`

const rutaBocetos = `detalles-bocetos-${categoria}`

const rutaProceso = `detalles-proceso-${categoria}`

const rutaResultado = `detalles-resultado-${categoria}`



</script>



<template>
    <div class="fondo min-h-screen flex justify-center items-center gap-2">
      <Card class="h-150 border rounded-r-none border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
        <CardContent class="flex flex-col justify-between h-full">

            <RouterLink 
            :to="{ name: rutaExplicacion, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
            >
                Explicación
            </RouterLink>

            <RouterLink
            :to="{ name: rutaBocetos, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
            >
                Bocetos
            </RouterLink>

            <RouterLink 
            :to="{ name: rutaProceso, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
             >
                Proceso
            </RouterLink>

            <RouterLink
            :to="{ name: rutaResultado, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
            >
                Resultado
            </RouterLink>

            <Button
            @click="router.back()"
            class="bg-[#d8720b] text-black hover:text-[#d8720b] text-md cursor-pointer py-3 rounded-lg font-semibold transition-all">
                atrás
            </Button>

        </CardContent>
      </Card>

      <Card class="h-150 w-200 border rounded-l-none border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm">
        <CardContent>
            <RouterView />
        </CardContent>
      </Card>

    </div>
</template>



<style scoped>

.fondo {
    background-image: url("../imagenes/trabajos/fondo2.png");
    background-size: cover;
}

</style>