<script lang="ts" setup>
import { ArrowUp } from 'lucide-vue-next'

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'

import { Calendar } from '@/components/ui/calendar'

import type { DateValue } from 'reka-ui'
import { ref } from 'vue'

const scrollToSection = (sectionId: string) => {
    if (sectionId === '#') {
    window.scrollTo({top: 0, behavior:'smooth'})
    }

    const elemento = document.querySelector<HTMLElement>(sectionId);
    if( elemento ) {
        elemento.scrollIntoView({ behavior:'smooth', block:'start' })
    }
}

const fecha = ref<DateValue>()

</script>

<template>

    <div>

        <nav class="navegador flex flex-col sm:flex-row justify-between">

                 <NavigationMenu>
                    <NavigationMenuList class="flex flex-col ml-5 sm:flex-row">
                        
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

                <div class="card_info">
                    <Card class="w-80 h-150 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                        <CardContent>
                            <h1>dibujo o foto mía</h1>      
                        </CardContent>
                    </Card>
                    
                    <div class="flex flex-col gap-5">
                        <Card class="w-150 h-75 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                            <CardContent>
                                <h1>estudios</h1>      
                            </CardContent>
                        </Card>

                        <Card class="w-150 h-70 border  border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                            <CardContent>
                                <h1>skills</h1>      
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </div>
            
        </section>

        <section id="contacto">
            <div class="contacto-fondo">

                <div>
                    <h2>contáctame</h2>
                </div>

                <div class="card_contacto">
                    <Card class="border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                        <CardContent>
                            <div class="w-full">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.362756509978!2d-0.3466072242107245!3d39.48372267160471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e0!3m2!1ses!2ses!4v1771162810587!5m2!1ses!2ses" 
                                    width="600" 
                                    height="450" 
                                    class="w-full h-full rounded-lg"
                                    allowfullscreen
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>     
                        </CardContent>
                    </Card>

            
                    <div>
                        <Card class="border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                            <CardContent>
                               <div>
                                    <form>
                                        <div class="space-y-2">

                                            <Label for="nombre">Nombre</Label>
                                            <Input id="nombre" required />

                                        </div>
                                                
                                        <div class="space-y-2">
                                                
                                            <Label for="apellido">Apellidos</Label>
                                            <Input id="apellido" required />

                                        </div>

                                        <div class="space-y-2">

                                            <Select required >
                                                <SelectTrigger class="border-gray-200 bg-white text-gray-900">
                                                    <SelectValue placeholder="Selecciona una misión"/>
                                                </SelectTrigger>

                                                <SelectContent class="bg-white">
                                                    <SelectItem value="rescatare">
                                                        Rescate de rehenes
                                                    </SelectItem>
                                                    <SelectItem value="investigare">
                                                        Investigación criminal
                                                    </SelectItem>
                                                    <SelectItem value="persequi">
                                                        Persecución de villanos
                                                    </SelectItem>
                                                    <SelectItem value="defendere">
                                                        Defensa de Gotham
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>

                                        <div class="space-y-2">

                                            <label>Fecha de la misión</label>
                                                <Popover required>
                                                    <PopoverTrigger asChild class="flex"> 
                                                        <Button variant="outline"> 
                                                            <span v-if="fecha">
                                                                {{ fecha.day }}/{{ fecha.month }}/{{ fecha.year }}
                                                            </span>
                                                            <span v-else>
                                                                Selecciona una fecha.
                                                            </span>
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <Calendar v-model="fecha"/>
                                                    </PopoverContent>
                                                </Popover>
                                        </div>

                                        <Button
                                            type="submit"
                                            class="w-full bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,171)] text-white text-md mt-4">
                                                Enviar solicitud
                                        </Button>

                                    </form>
                               </div>
                            </CardContent>
                        </Card>

                        <div>
                            <Card class="border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                                <CardContent>
                                    <h2>redes</h2>
                                </CardContent>
                            </Card>     
                        </div>

                       
                    </div>

                    
                    
                </div>

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

    .card_info {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50rem;
        gap: 2rem;
    }

    .card_contacto {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50rem;
        gap: 2rem;
    }

  
</style>