<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House, MoveLeft, MoveRight } from 'lucide-vue-next';

import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const paginas = [
  'diseño_3d',
  'diseño_gráfico',
  'ilustración'
]

const apartadoActual = computed(() =>
  paginas.findIndex(nombre => nombre === useRoute().name)
)

const puedeIrAtras = computed(() => apartadoActual.value > 0)
const puedeIrAdelante = computed(() => apartadoActual.value < paginas.length - 1)

const irAtras = () => {
  if (puedeIrAtras.value) {
    router.push({ name: paginas[apartadoActual.value - 1] })
  }
}

const irAdelante = () => {
  if (puedeIrAdelante.value) {
    router.push({ name: paginas[apartadoActual.value + 1] })
  }
}

const cursorRouter = useRouter();

const irAPaginaTrabajos = () => {
  cursorRouter.push({ path: '/', hash: '#trabajos' });
};

</script>



<template>
    <div class="fondo grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen">
        <div />
        <main>
            <RouterView />
        </main>

        <div class="flex justify-center mb-10 items-center">
            <footer class="inline-flex border px-4 py-2 border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-full">
                <div class="flex items-center">
                    <Button
                    v-if="puedeIrAtras" 
                    @click="irAtras"
                    class="rounded-full bg-transparent hover:bg-[rgba(255,255,255,0.15)]"
                    >
                        <MoveLeft />
                    </Button>

                    <Button
                    class="flex items-center justify-center rounded-full bg-transparent hover:bg-[rgba(255,255,255,0.15)]"
                    @click="irAPaginaTrabajos"
                    >
                        <House />
                    </Button>

                    <Button class="rounded-full bg-transparent hover:bg-[rgba(255,255,255,0.15)]"
                    v-if="puedeIrAdelante"
                    @click="irAdelante"
                    >
                        <MoveRight />
                    </Button>
                    
                    
                </div>

            </footer> 

        </div>
       
    </div>
</template>



<style scoped>

.fondo {
    background-image: url("../imagenes/trabajos/fondo2.png");
    background-size: cover;
}

</style>