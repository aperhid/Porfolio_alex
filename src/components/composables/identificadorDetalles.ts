import { Detalles3d, type detalles3d } from "@/pages/trabajos/detalles/detalles3d"
import { DetallesGrafico, type detallesGrafico } from "@/pages/trabajos/detalles/detallesGrafico"
import { DetallesIlustracion, type detallesIlustracion } from "@/pages/trabajos/detalles/detallesIlustracion"
import { useRoute } from "vue-router"

export function identificadorDetalles() {
    const route = useRoute()

    const id = Number(route.params.id)

    let categoria: (detalles3d | detallesGrafico | detallesIlustracion)[] = []

    if (route.name?.toString().includes('3d')) {
    categoria = Detalles3d
    }

    if (route.name?.toString().includes('grafico')) {
    categoria = DetallesGrafico
    }

    if (route.name?.toString().includes('ilustracion')) {
    categoria = DetallesIlustracion
    }

    const detalle = categoria.find(d => d.id === id) 
    
    return {
        detalle
    }
}

