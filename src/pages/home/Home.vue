<script lang="ts" setup>

//import { Button } from '@/components/ui/button'
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
                        <a href="#" @click.prevent="scrollToSection('#')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-transparent hover:font-bold px-5']">
                             Inicio   
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#trabajos')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-transparent hover:font-bold']">
                             Trabajos    
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#información')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-transparent hover:font-bold']">
                             Información    
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#contacto')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-transparent hover:font-bold']">
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

        <header class="título">
                <h1>PORFOLIO</h1>
                <div id="título-portafolio" class="fondo"> </div>
                <p>Álex Pérez Hidalgo</p>
        </header>

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
                    <Card class="w-60 h-80 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                        <CardContent>
                            <h2 class="font-medium text-lg pointer-events-none">
                                Ilustración
                            </h2>
                        </CardContent>
                    </Card>   

                    <Card class="w-60 h-80 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                        <CardContent>
                            <h2 class="font-medium text-lg pointer-events-none">
                                Diseño
                            </h2>
                        </CardContent>
                    </Card>  

                    <Card class="w-60 h-80 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                        <CardContent>
                            <h2 class="font-medium text-lg pointer-events-none">
                               Volumen
                            </h2>
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
        background-size: 100% 100%;
        background-position: center center;
        background-image: url("../imagenes/Home/fondo degradado 1.png");
            
        }

    .trabajos-fondo {
        min-height: 100vh;
        background-size: 100% 100%;
        background-position: center center;
        background-image: url("../imagenes/Home/fondo degradado 2.jpg");
        position: relative;
        
    }

    .información-fondo {
        min-height: 100vh;
        background-size: 100% 100%;
        background-position: center center;
        background-image: url("../imagenes/Home/fondo degradado 3.jpg");
        
    }

    .contacto-fondo {
        min-height: 100vh;
        background-size: 100% 100%;
        background-position: center center;
        background-image: url("../imagenes/Home/fondo degradado 4.jpg");
        
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

    /* tablet */
    @media (min-width: 640px) {
        .navegador {
            width: calc(100% - 40px);
            height: 60px;
            margin-top: 17px;
            margin-left: 16px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background-color: rgba(255, 255, 255, 0.15);
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
            /* poner fuente */
        }   
    }

    /* tocar */
    .título > h1 { 
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        font-size: 3rem; 
        color: white;
        pointer-events:none; 
    }

    /* tocar */
    .título > p {
        position: absolute;
        top: 60%;
        width: 100%;
        text-align: center;
        font-size: 1.5rem; 
        color: white;
        pointer-events:none; 
    }
/* tocar */
    @media (min-width: 768px) {
        .título > h1 { 
            position: absolute;
            top: 40%;
            width: 100%;
            text-align: center;
            font-size: 5rem; 
            color: white;
            pointer-events:none; 
        }   

        .título > p {
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

  
</style>