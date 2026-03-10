import { useRoute } from "vue-router"


export function usarCategoriaDetalles() {
    const route = useRoute()

    let categoria = ''

    if (route.path.includes('Diseño_3d')) {
    categoria = '3d'
    }

    if (route.path.includes('Diseño_gráfico')) {
    categoria = 'grafico'
    }

    if (route.path.includes('ilustracion')) {
    categoria = 'ilustracion'
    } 


    const rutaExplicacion = `detalles-explicacion-${categoria}`

    const rutaBocetos = `detalles-bocetos-${categoria}`

    const rutaProceso = `detalles-proceso-${categoria}`

    const rutaResultado = `detalles-resultado-${categoria}`



    let rutaTrabajos = ''

    if (categoria === '3d') rutaTrabajos = 'diseño_3d'
    else if (categoria === 'grafico') rutaTrabajos = 'diseño_gráfico'
    else if (categoria === 'ilustracion') rutaTrabajos = 'ilustracion' 
    
    return {
        categoria,
        rutaExplicacion,
        rutaBocetos,
        rutaProceso,
        rutaResultado,
        rutaTrabajos
    }
}
