
<script setup lang="ts">

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { scrollToSection } from '@/utils/scrollToSection';

</script>



<template>
    <nav class="navegador flex flex-row justify-between items-center gap-2 p-1.5 fixed transition-all">

                 <NavigationMenu>
                    <NavigationMenuList class="flex flex-row gap-2">
                        
                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-white bg-transparent hover:text-white hover:scale-105 hover:bg-transparent hover:underline transition-all']">
                             Inicio   
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#trabajos')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-white bg-transparent hover:text-white hover:scale-105 hover:bg-transparent hover:underline transition-all']">
                             Trabajos    
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#información')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-white bg-transparent hover:text-white hover:scale-105 hover:bg-transparent hover:underline transition-all']">
                             Información    
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#contacto')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-white bg-transparent hover:text-white hover:scale-105 hover:bg-transparent hover:underline transition-all']">
                             Contacto    
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <div class="nombre hidden sm:block">
                    Álex Pérez Hidalgo
                </div>
        </nav>
</template>



<style scoped>

  .navegador {
        border: 1px solid rgba(255, 255, 255, 0.3);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 2rem 2rem 2rem 2rem;
        backdrop-filter: blur(0.3rem);
        opacity: 1;
        margin-top: 17px;
        z-index: 1;
        margin-right: 2rem;
        margin-left: 3rem;

    }

    @media (min-width: 640px) {
        .navegador {
            width: calc(100% - 40px);
            height: 50px;
            margin-top: 17px;
            margin-left: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(0.3rem);
            border-radius: 2rem 2rem 2rem 2rem;
            opacity: 1;
        }
    }

</style>