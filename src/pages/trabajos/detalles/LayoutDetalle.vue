<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';




</script>



<template>
    <div class="fondo min-h-screen flex justify-center items-center gap-2">
      <Card class="h-150 border rounded-r-none border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
        <CardContent class="flex flex-col justify-between h-full">

            <RouterLink 
            to="Explicación"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
            >
                Explicación
            </RouterLink>

            <RouterLink
            to="Bocetos"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
            >
                Bocetos
            </RouterLink>

            <RouterLink 
            to="Proceso"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
             >
                Proceso
            </RouterLink>

            <RouterLink
            to="Resultado"
            class="text-white text-center hover:bg-[rgba(255,255,255,0.15)] p-2 rounded"
            active-class="font-bold"
            >
                Resultado
            </RouterLink>

            <Button
            class="bg-[#d8720b] text-black hover:text-[#d8720b] text-md cursor-pointer py-3 rounded-lg font-semibold transition-all">
                atrás
            </Button>

        </CardContent>
      </Card>

      <Card class="h-150 w-200 border rounded-l-none border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm">
        <CardContent>

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