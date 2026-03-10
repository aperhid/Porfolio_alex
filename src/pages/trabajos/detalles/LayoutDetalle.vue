<script setup lang="ts">
import { usarCategoriaDetalles } from '@/components/composables/usarCategoriaDetalles';
import Button from '@/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const {
  rutaExplicacion,
  rutaBocetos,
  rutaProceso,
  rutaResultado,
  rutaTrabajos
} = usarCategoriaDetalles()


</script>



<template>
    <div class="fondo min-h-screen flex flex-col md:flex-row justify-center items-start md:items-center p-4 md:p-8 gap-2">
      <Card class="w-full md:w-48 md:h-150 border rounded-b-none md:rounded-bl-lg md:rounded-r-none border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
        <CardContent class="flex md:flex-col justify-between h-full space-y-2">

            <RouterLink 
            :to="{ name: rutaExplicacion, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded-lg text-sm md:text-base"
            exact-active-class="font-bold bg-[rgba(255,255,255,0.15)]"
            >
                Explicación
            </RouterLink>

            <RouterLink
            :to="{ name: rutaBocetos, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded-lg text-sm md:text-base"
            exact-active-class="font-bold bg-[rgba(255,255,255,0.15)]"
            >
                Bocetos
            </RouterLink>

            <RouterLink 
            :to="{ name: rutaProceso, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded-lg text-sm md:text-base"
            exact-active-class="font-bold bg-[rgba(255,255,255,0.15)]"
             >
                Proceso
            </RouterLink>

            <RouterLink
            :to="{ name: rutaResultado, params: { id: route.params.id } }"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded-lg text-sm md:text-base"
            exact-active-class="font-bold bg-[rgba(255,255,255,0.15)]"
            >
                Resultado
            </RouterLink>

            <Button
            @click="router.push({name:rutaTrabajos})"
            class="bg-[#d8720b] text-black hover:text-[#d8720b] text-sm md:text-md cursor-pointer py-2 md:py-3 rounded-lg font-semibold transition-all">
                Atrás
            </Button>

        </CardContent>
      </Card>

      <Card class="w-full md:w-[70%] h-full md:h-150 border rounded-t-none md:rounded-tr-lg md:rounded-l-none border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm">
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