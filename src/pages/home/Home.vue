<script lang="ts" setup>
import { ArrowUp } from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue';

import {
  Card,
  CardContent,
} from '@/components/ui/card'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const scrollToSection = (sectionId: string) => {
    if (sectionId === '#') {
    window.scrollTo({top: 0, behavior:'smooth'})
    }

    const elemento = document.querySelector<HTMLElement>(sectionId);
    if( elemento ) {
        elemento.scrollIntoView({ behavior:'smooth', block:'start' })
    }
}

</script>

<template>

    <div>

        <nav class="navegador flex flex-col sm:flex-row justify-between">

                 <NavigationMenu>
                    <NavigationMenuList class="flex flex-col ml-5 sm:flex-row">
                        
                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#porfolio')">
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

                <div class="Portfolio">
                    <span>
                        Portfolio
                    </span>
                </div>
        </nav>

        <section>
            <header class="titulo">
                <div id="titulo-portafolio" class="fondo"> </div>
                <p>Álex Pérez Hidalgo</p>
            </header>

        </section>
       

        <section id="trabajos">
            <div class="trabajos-fondo flex flex-col gap-8 ">
                <div class="texto-trabajos">
                    <h1>
                        Texto
                    </h1>
                    <p>
                        Click on the quote of your favourite character
                    </p>   
                </div>

                <div class="card">
                    <Card class="w-60 h-80 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:scale-105 transition-transform">
                        <CardContent class="flex flex-col items-center">
                            <img class="w-48 h-42 object-cover object-top mt-2 rounded-md"
                            src="../imagenes/Home/homer-s.png" alt="">
                            <h1 class="mt-4 font-medium text-lg pointer-events-none text-white">
                                DISEÑO 3D
                            </h1>
                     
                                <RouterLink to="/diseño_3d"> 
                                    <ArrowUp class="mt-4 rounded-full text-white size-10 bg-transparent border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md" />
                                </RouterLink>
                        </CardContent>
                    </Card> 
                    <Card class="w-60 h-80 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:scale-105 transition-transform">
                        <CardContent class="flex flex-col items-center">
                            <img class="w-48 h-42 object-cover object-top mt-2 rounded-md"
                            src="../imagenes/Home/homer-s.png" alt="">
                            <h1 class="mt-4 font-medium text-lg pointer-events-none text-white">
                                DISEÑO GRÁFICO
                            </h1>
                     
                                <RouterLink to="/diseño_gráfico"> 
                                    <ArrowUp class="mt-4 rounded-full text-white size-10 bg-transparent border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md" />
                                </RouterLink>
                        </CardContent>
                    </Card>  

                      <Card class="w-60 h-80 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:scale-105 transition-transform">
                        <CardContent class="flex flex-col items-center">
                            <img class="w-48 h-42 object-cover object-top mt-2 rounded-md"
                            src="../imagenes/Home/homer-s.png" alt="">
                            <h1 class="mt-4 font-medium text-lg pointer-events-none text-white">
                                ILUSTRACIÓN
                            </h1>

                                <RouterLink to="/ilustración"> 
                                    <ArrowUp class="mt-4 rounded-full text-white size-10 bg-transparent border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md" />
                                </RouterLink>
                        </CardContent>
                    </Card>  


                </div>
                   
                 

            </div>

                
            
        </section>

        <section id="información">
            <div class="información-fondo">

            </div>
            
        </section>

        <section id="contacto">
            <div class="contacto-fondo">

            </div>
            
        </section>

    </div>

    

   
       


</template>

<style scoped>

    .fondo {
        min-height: 100vh;
        background-position: center center;
        background-image: url("../imagenes/Home/fondoo_Mesa de trabajo 1.jpg");
        background-size: cover;  
        }

    .trabajos-fondo {
        min-height: 100vh;
        background-size: cover;
        background-position: center center;
        background-image: url("../imagenes/Home/fondoo_Mesa de trabajo 1.jpg");
        
    }

    .información-fondo {
        min-height: 100vh;
        background-size: auto;
        background-position: center center;
        background-image: url("../imagenes/Home/fondo03.jpg");
        
    }

    .contacto-fondo {
        min-height: 100vh;
        background-size: auto;
        background-position: center center;
        background-image: url("../imagenes/Home/fondo04.jpg");
        
    }


    /* móvil */
    .navegador {
        background-color: blue;
        opacity: 0.7;
        box-shadow: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        width: 11rem;
        border-radius: 0 0 1rem 0;
        z-index: 1;

    }

    @media (min-width: 640px) {
        .navegador {
            width: calc(100% - 40px);
            height: 60px;
            margin-top: 17px;
            margin-left: 16px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(0.4rem);
            border-radius: 2rem 2rem 2rem 2rem;
            opacity: 1;
        }
    }

    @media (min-width: 640px) {
        .Portfolio {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 50px;
            pointer-events: none;
            color: white;
            /* poner fuente */
        }   
    }

    /* tocar */
    .titulo > h1 { 
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        font-size: 3rem; 
        color: black;
        pointer-events:none; 
    }

    /* tocar */
    .titulo > p {
        position: absolute;
        top: 60%;
        width: 100%;
        text-align: center;
        font-size: 1.5rem; 
        color: black;
        pointer-events:none; 
    }
/* tocar */
    @media (min-width: 768px) {
        .titulo > h1 { 
            position: absolute;
            top: 40%;
            width: 100%;
            text-align: center;
            font-size: 5rem; 
            color: black;
            pointer-events:none; 
        }   

        .titulo > p {
            position: absolute;
            top: 60%;
            width: 100%;
            text-align: center;
            font-size: 2rem; 
            color: white;
            pointer-events:none; 
        }

    }  
   
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40rem;
        gap: 10rem;
        
    }

    .contenidoCard {
        
    }
  
</style>