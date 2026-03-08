
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/Home.vue";

import Diseño_3d from "@/pages/trabajos/Diseño_3d.vue";

import Diseño_grafico from "@/pages/trabajos/Diseño_grafico.vue";

import Ilustracion from "@/pages/trabajos/ilustracion.vue";

import Layout from "@/pages/trabajos/Layout.vue";

import LayoutDetalle from "@/pages/trabajos/detalles/LayoutDetalle.vue";

import Explicacion from "@/pages/trabajos/detalles/Explicacion.vue";
import Bocetos from "@/pages/trabajos/detalles/Bocetos.vue";
import Proceso from "@/pages/trabajos/detalles/Proceso.vue";
import ResultadoFinal from "@/pages/trabajos/detalles/ResultadoFinal.vue";




export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Diseño_3d',
      children: [
        {
          path: '',
          component: Layout,
          children: [
            {
              path: '',
              name: 'diseño_3d',
              component: Diseño_3d
            }
          ]   
        },

        {
          path: 'detalles/:id',
          component: LayoutDetalle,
          children: [
            {
              path: '',
              name: 'detalles-explicacion-3d',
              component: Explicacion
            },
            {
              path: 'bocetos',
              name: 'detalles-bocetos-3d',
              component: Bocetos
            },
            {
              path: 'proceso',
              name: 'detalles-proceso-3d',
              component: Proceso
            },
            {
              path: 'resultado',
              name: 'detalles-resultado-3d',
              component: ResultadoFinal
            },
          ]
        }
      ]
    },
    {
      path: '/Diseño_gráfico',
      children: [
        {
          path: '',
          component: Layout,
          children: [
            {
              path: '',
              name: 'diseño_gráfico',
              component: Diseño_grafico
            },
          ]   
        },

        {
          path: 'detalles/:id',
          component: LayoutDetalle,
          children: [
            {
              path: '',
              name: 'detalles-explicacion-grafico',
              component: Explicacion
            },
            {
              path: 'bocetos',
              name: 'detalles-bocetos-grafico',
              component: Bocetos
            },
            {
              path: 'proceso',
              name: 'detalles-proceso-grafico',
              component: Proceso
            },
            {
              path: 'resultado',
              name: 'detalles-resultado-grafico',
              component: ResultadoFinal
            },
          ]
        }

        
      ]
    
    },
    {
      path: '/ilustración',
      children: [
        {
          path: '',
          component: Layout,
          children: [
            {
              path: '',
              name: 'ilustración',
              component: Ilustracion
            },
            
          ]   
        },

        {
          path: 'detalles/:id',
          component: LayoutDetalle,
          children: [
            {
              path: '',
              name: 'detalles-explicacion-ilustracion',
              component: Explicacion
            },
            {
              path: 'bocetos',
              name: 'detalles-bocetos-ilustracion',
              component: Bocetos
            },
            {
              path: 'proceso',
              name: 'detalles-proceso-ilustracion',
              component: Proceso
            },
            {
              path: 'resultado',
              name: 'detalles-resultado-ilustracion',
              component: ResultadoFinal
            },
          ]
        }
      ]
    
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ], 
   scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }

    return { top: 0 };
  }

})