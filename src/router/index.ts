
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/Home.vue";

import Diseño_3d from "@/pages/trabajos/Diseño_3d.vue";

import Diseño_grafico from "@/pages/trabajos/Diseño_grafico.vue";

import Ilustracion from "@/pages/trabajos/ilustracion.vue";

import Layout from "@/pages/trabajos/Layout.vue";

import LayoutDetalle from "@/pages/trabajos/detalles/LayoutDetalle.vue";

import Detalles from "@/pages/trabajos/detalles/Detalles.vue";




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
          path: 'detalles',
          component: LayoutDetalle,
          children: [
            {
              path: '',
              name: 'detalles',
              component: Detalles
            }
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
          path: 'detalles',
          component: LayoutDetalle,
          children: [
            {
              path: '',
              name: 'detalles',
              component: Detalles
            }
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
          path: 'detalles',
          component: LayoutDetalle,
          children: [
            {
              path: '',
              name: 'detalles',
              component: Detalles
            }
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