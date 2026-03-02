<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { useRouter } from 'vue-router';

const cursorRouter = useRouter();

const irAPaginaTrabajos = () => {
  cursorRouter.push({ path: '/', hash: '#trabajos' });
};

</script>



<template>
    <div class="fondo grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen bg-black">

        <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-[1400px] md:px-20">
            
        </div>

        <main>
            <RouterView />
        </main>

        <div class="flex items-center justify-center h-25 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-t-full">
            <footer class="">
            
                <div class="flex justify-around">
                    <Button>
                    <RouterLink to="/">
                        Exit
                    </RouterLink>
                    </Button>
                    
                    <Button
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
    background-image: url("../imagenes/Home/fondo2.png");
    background-size: cover;
}

</style>