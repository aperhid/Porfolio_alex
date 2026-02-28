<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';



</script>



<template>
    <div class="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen">
        <header class="bg-[#ffde00] w-full border border-black">

            <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-[1400px] md:px-20">

            <div class="flex gap-6 pt-3">
             <RouterLink to="/simpsons/gallery" active-class="font-bold">
                Characters
            </RouterLink>
             <RouterLink to="/simpsons/about" active-class="font-bold">
                About
            </RouterLink>
            <Button>
                <RouterLink to="/simpsons">
                Exit
            </RouterLink>

            </Button>    
            </div>   

            </div>

            
           
            
        </header>

        <main>
            <RouterView />
        </main>

        <footer class="text-center bg-[#ffde00] w-full border border-black py-6">

            <div>
                <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2026
            </div>

            <small>
                This app was done by Fernando Cordón
            </small>
        
        </footer>
	            
       
    </div>
</template>



<style scoped>

</style>