<script lang="ts" setup>

import { ArrowUp, Award, GraduationCap, Instagram, Mail, MessageCircle } from 'lucide-vue-next'

import { Separator } from '@/components/ui/separator'

import {
  Card,
  CardContent,
} from '@/components/ui/card'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'

import { ref } from 'vue'
import { imagenLogo } from '../trabajos/datos'

import { ProgramasInfo } from './programasInfo'

import navegacion from '@/components/navegacion.vue'

import popover from '@/components/popover.vue'


const imagenInformacion = ref('imagen_info2.png')

const listaProgramas = ref(ProgramasInfo)


</script>

<template>

    <div class="overflow-x-hidden">

        <navegacion />

        <section class="fondo_imagen w-full h-[90vh] min-w-screen min-h-screen">
           <div
            v-for="logotipo in imagenLogo"
            :key="logotipo.imagen"
            >
                <img
                class="imagenLogo transition-all" 
                :src="`/imagenes/Home/${ logotipo.imagen }`" 
                alt="logotipo del Porfolio"
                >

                <h1 class="fecha fuente transition-all">
                    2026
                </h1>

           </div>
        </section>
       

        <section id="trabajos">
            <div class="bg-black w-full h-[90vh] lg:min-w-screen lg:min-h-screen flex justify-center">
                <div class="titulo_trabajos pointer-events-none transition-all">
                    <h1>
                        Proyectos
                    </h1>  
                </div>

                <div class="card gap-8 lg:gap-20">
                    <Card class="w-70 h-95 lg:w-80 lg:h-110 border border-[rgba(255,255,255,0.4)] bg-gradient-to-br from-[#d8720b]/40 via-black/20 to-[#d8720b]/40 backdrop-blur-sm hover:scale-105 transition-transform">
                        <CardContent class="flex flex-col items-center">
                            <img class="lg:w-70 lg:h-60 object-cover object-top mt-2 rounded-md"
                            src="/imagenes/Home/fondo_3d.png" alt="">
                            <h1 class="mt-5 lg:mt-9 font-medium text-xl lg:text-2xl pointer-events-none text-white">
                                DISEÑO 3D
                            </h1>
                     
                                <RouterLink to="diseño_3d"> 
                                    <ArrowUp class="mt-5 lg:mt-7 rounded-full text-white size-9 lg:size-10 bg-transparent border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md" />
                                </RouterLink>
                        </CardContent>
                    </Card> 
                    <Card class="w-70 h-95 lg:w-80 lg:h-110 border border-[rgba(255,255,255,0.4)] bg-gradient-to-br from-[#d8720b]/40 via-black/20 to-[#d8720b]/40 backdrop-blur-sm hover:scale-105 transition-transform">
                        <CardContent class="flex flex-col items-center">
                            <img class="lg:w-70 lg:h-60 object-cover object-top mt-2 rounded-md"
                            src="/imagenes/Home/fondo_grafico.png" alt="">
                            <h1 class="mt-5 lg:mt-9 font-medium text-xl lg:text-2xl pointer-events-none text-white">
                                DISEÑO GRÁFICO
                            </h1>
                     
                                <RouterLink to="diseño_gráfico"> 
                                    <ArrowUp class="mt-4 lg:mt-7 rounded-full text-white size-9 lg:size-10 bg-transparent border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md" />
                                </RouterLink>
                        </CardContent>
                    </Card>  

                      <Card class="w-70 h-95 lg:w-80 lg:h-110 border border-[rgba(255,255,255,0.4)] bg-gradient-to-br from-[#d8720b]/40 via-black/20 to-[#d8720b]/40 backdrop-blur-sm hover:scale-105 transition-transform">
                        <CardContent class="flex flex-col items-center">
                            <img class="lg:w-70 lg:h-60  object-cover object-top mt-2 rounded-md"
                            src="/imagenes/Home/fondo_ilustracion.png" alt="">
                            <h1 class="mt-5 lg:mt-9 font-medium text-xl lg:text-2xl pointer-events-none text-white">
                                ILUSTRACIÓN
                            </h1>

                                <RouterLink to="ilustracion"> 
                                    <ArrowUp class="mt-5 lg:mt-7 rounded-full text-white size-9 lg:size-10 bg-transparent border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-md" />
                                </RouterLink>
                        </CardContent>
                    </Card>  

                </div>
                  
            </div>
        </section>

        <section id="información">
            <div class="fondo_imagen2 w-full min-h-screen">

                <div class="flex flex-col lg:flex-row justify-center items-center gap-6 lg:h-[110vh] px-6 lg:mr-20 py-10">
                    <div class="titulo_info fuente text-7xl md:text-[6rem] lg:text-[8rem] mt-10 pointer-events-none transition-all">
                        Sobre mí
                    </div>

                    <div class="hidden lg:block">
                        <Card class="w-50 md:max-w-sm lg:w-80 lg:h-150 rounded-lg lg:rounded-r-none border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                            <CardContent>
                                <img 
                                    class="object-cover w-full h-auto lg:h-137 lg:w-75" 
                                    :src="`/imagenes/informacion/${ imagenInformacion }`" 
                                    alt=""
                                    @mouseenter="imagenInformacion='imagen_info2.png'"
                                    @mouseleave="imagenInformacion='imagen_info.png'"
                                    >
                            </CardContent>
                        </Card>    
                    </div>
                    
                    <div class="flex flex-col gap-5 w-full max-w-2xl">
                        <Card class="w-full lg:w-150 lg:h-75 rounded-b-none lg:rounded-tr-xl lg:rounded-b-none lg:rounded-l-none border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                            <CardContent >
                                <div class="flex flex-col gap-3">
                                    <p class="text-white pointer-events-none">¡Hola! Soy Álex, estudiante de diseño y un apasionado de todas las ramas artísticas. Ofrezco creatividad, estética y atención al detalle en cada proyecto. </p>
                                    <Separator />

                                    <div class="flex justify-between py-2">
                                        <div class="flex items-center gap-5 group cursor-default">
                                            <span class="text-white font-medium">Español</span>
                                            <span
                                            class="text-[#d8720b] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                            Nativo
                                            </span>
                                        </div>

                                    
                                        <div class="flex items-center gap-5 group cursor-default">
                                            <span class="text-white font-medium">Valenciano</span>
                                            <span
                                            class="text-[#d8720b] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                            C1
                                            </span>
                                        </div>

                                        
                                        <div class="flex items-center gap-5 group cursor-default">
                                            <span class="text-white font-medium">Inglés</span>
                                            <span
                                            class="text-[#d8720b] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                            B1
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                    <Separator />

                                    <div class="flex flex-col py-2">
                                        <div class="flex justify-between">
                                         <div class="flex text-white gap-2">
                                            <GraduationCap class="text-[#d8720b] w-7 h-7"/>
                                            <a href="https://portal.edu.gva.es/iestirantloblanc/es/inici-es/" target="_blank" rel="noopener noreferrer" class="hover:text-[#d8720b]"> 
                                                Bachillerato de Artes plásticas y Diseño
                                            </a>    
                                        </div>   

                                         <div class="flex text-white gap-2">
                                            <GraduationCap class="text-[#d8720b] w-7 h-7"/>
                                            <a href="https://www.upv.es/titulaciones/GDTC/indexc.html" target="_blank" rel="noopener noreferrer" class="hover:text-[#d8720b]"> 
                                                Diseño y Tecnologias Creativas UPV <br>
                                            </a>    
                                        </div>
                                        </div>
                                        
                                    </div>

                                    <Separator />

                                    <div class="flex justify-between items-center pointer-events-none mt-1 text-white">
                                        <div class="flex gap-2">
                                            <Award class="text-[#d8720b] w-7 h-7"/>
                                            <p>Matrícula de honor en Bachillerato</p>
                                        </div>

                                        <div class="flex gap-2">
                                            <Award class="text-[#d8720b] w-7 h-7"/>
                                            <p>Mención honorífica EVAU</p>
                                        </div> 
                                    </div>
                                    

                                </div>
                            </CardContent>
                        </Card>

                        <Card class="w-full lg:w-150 lg:h-70 rounded-t-none lg:rounded-br-xl lg:rounded-t-none lg:rounded-l-none border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                            <CardContent>
                                <div class="grid grid-cols-3 gap-6 py-2 place-items-center">
                                        <div 
                                        class="flex items-center gap-3 md:gap-5 group cursor-default"
                                        v-for="programas in listaProgramas"
                                        >
                                            <img class="w-13 h-13 md:w-15 md:h-15 hover:scale-105 rounded-2xl hover:shadow-[0_0_20px_white]"
                                            :src="`/imagenes/informacion/${ programas.imagen }`" 
                                            :alt="`${ programas.titulo }`"
                                            >
                                            <span
                                            class="text-[13px] md:text-[16px] text-white font-medium opacity-0 group-hover:opacity-100 transition-all"
                                            >
                                            {{ programas.nivel }}
                                            </span>
                                        </div>
                                    </div>  
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </div>
            
        </section>

        <section id="contacto">
            <div class="fondo_imagen w-full min-h-screen pt-25">
                
                    <h1 class="fuente lg:absolute text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:mt-10 ml-10 pointer-events-none transition-all">
                        ¿Te interesa...? <br> 
                        ¡Contáctame!
                    </h1>

                <div class="card_contacto">
                    <Card class="hidden md:block border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                        <CardContent>
                            <div class="w-full aspect-square">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24651.751686028074!2d-0.4990223256836036!3d39.43613130000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6051cf930b3ef3%3A0xa415f9d06eb6b1d4!2sTorrent!5e0!3m2!1ses!2ses!4v1772584451847!5m2!1ses!2ses" 
                              class="h-full w-full"                              
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
                                        <div class="space-y-2 mb-4 text-white">

                                            <Label for="nombre" class="font-light" >Nombre</Label>
                                            <Input id="nombre" required />

                                        </div>
                                                
                                        <div class="space-y-2 mb-4 text-white">
                                                
                                            <Label for="apellido" class="font-light">Apellidos</Label>
                                            <Input id="apellido" required />

                                        </div>

                                        <div class="space-y-2">
                                            <popover />
                                        </div>

                                        <Button
                                            type="submit"
                                            class="w-full bg-[#d8720b] text-black hover:text-[#d8720b] text-md mt-4 cursor-pointer py-3 rounded-full font-semibold transition-all">
                                                Enviar solicitud
                                        </Button>

                                    </form>
                               </div>
                            </CardContent>
                        </Card>

                        <div class="mt-4 flex justify-center">
                            <Card class="h-10 px-9 rounded-b-full border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.15)] backdrop-blur-md">
                                <CardContent class="flex items-center justify-center gap-6 h-full p-0">
      
                                    <a href="https://www.instagram.com/alezzz_____" target="_blank" rel="noopener noreferrer">
                                     <Instagram class="w-7 h-7 text-white/80 hover:text-[#d8720b] cursor-pointer transition-colors" />    
                                    </a>
                                   
                                    <div class="h-6 w-px bg-white/40"></div>
      
                                    <a href="mailto:alexph1912@gmail.com">
                                     <Mail class="w-7 h-7 text-white/80 hover:text-[#d8720b] cursor-pointer transition-colors" />   
                                    </a>
                                    
      
                                    <div class="h-6 w-px bg-white/40"></div>
      
                                    <a href="https://wa.me/652154592" target="_blank" rel="noopener noreferrer">
                                     <MessageCircle class="w-7 h-7 text-white/80 hover:text-[#d8720b] cursor-pointer transition-colors" />   
                                    </a>
                                    
                                </CardContent>
                            </Card>
                                 
                        </div>
                        
                </div>
                    
                </div>

                <div class="w-full flex justify-end items-end">
                    <h2 class="fuente text-4xl md:text-6xl lg:text-7xl font-bold text-[#d8720b] mt-10 mr-6 lg:mr-10 mb-6 lg:mb-10 pointer-events-none text-right transition-all">
                        ¡Gracias!
                    </h2>
                </div>
            </div>
        </section>

    </div>
</template>



<style scoped>

.fuente {
    font-family: outfit-SemiBold;
}

.fondo_imagen {
    background-image: url(../imagenes/Home/fondoPortada.jpg);
    background-size: cover;
}

.fondo_imagen2 {
    background-image: url(../imagenes/Home/fondoPortada2.jpg);
    background-size: cover;
}

.imagenLogo {
    position: absolute;
    bottom: 40px; 
    left: 5%;
    width: 320px;
    height: auto;
}

.fecha {
    color: #d8720b;
    position: absolute;
    bottom: 4%; 
    right: 5%;
    font-size: 36px;
    font-weight: bold;
    pointer-events: none;
}

.titulo_trabajos {
    font-size: 7rem;
    font-weight: 500;
    color: white;
    margin-top: 28rem;
}

.titulo_info {  
    color: white;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card_contacto {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 125rem;
    height: 30rem;
}


@media (max-width: 640px) {
    .titulo_trabajos {
        margin-top: 4rem;
        text-align: center;
        font-size: 5.5rem;
    }

    .card {
        position: static;
        flex-direction: column;
        gap: 2rem;
        margin-top: 1rem;
    }

    #trabajos > div {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding-bottom: 4rem;
    }

    .card_contacto {
        width: 100%;
        height: auto;
        flex-direction: column;
        padding: 1rem;
        margin-top: 2rem;
    }
}


@media (min-width: 640px) {
    .imagenLogo {
        width: 520px;
    }

    .fecha {
        font-size: 55px;
    }

    .card {
        position: absolute;
        height: 43rem;
    }
}


@media (min-width: 1024px) {
    .imagenLogo {
        width: 720px;
    }

    .fecha {
        font-size: 70px;
    }

    .titulo_trabajos {
        font-size: 10rem;
    }

    .titulo_info {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        margin-top: 7rem;
        margin-left: 4rem;
    }
}


@media (max-width: 1024px) {
    .card_contacto {
        width: 100%;
        height: auto;
        padding: 1rem;
        margin-top: 2rem;
    }
}
  
</style>