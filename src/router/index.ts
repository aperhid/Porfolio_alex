
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/Home.vue";

import Diseño_3d from "@/pages/trabajos/Diseño_3d.vue";

import Diseño_grafico from "@/pages/trabajos/Diseño_grafico.vue";

import Ilustracion from "@/pages/trabajos/ilustracion.vue";

import Layout from "@/pages/trabajos//Layout.vue";

import Detalles from "@/pages/trabajos/Detalles.vue";




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
            },
            {
              path: '/trabajos_detalles',
              name: 'trabajos_detalles',
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
            {
              path: '/trabajos_detalles',
              name: 'trabajos_detalles',
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
            {
              path: '/trabajos_detalles',
              name: 'trabajos_detalles',
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
  ]
})