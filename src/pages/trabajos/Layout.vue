<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

import { useRouter } from 'vue-router';

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

        <div class="flex justify-center items-center h-25 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-t-full">
            <footer>

                <div>
                    <Button class="bg-transparent ">
                    <RouterLink to="/">
                        Exit
                    </RouterLink>
                    </Button>
                    
                    <Button
                    class="bg-transparent"
                    @click="irAPaginaTrabajos"
                    >
                    <RouterLink to="/">
                        Exit
                    </RouterLink>
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