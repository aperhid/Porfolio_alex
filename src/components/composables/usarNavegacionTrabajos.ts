import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"


export function usarNavegacionTrabajos() {
    const router = useRouter()

    const paginas = [
    'diseño_3d',
    'diseño_gráfico',
    'ilustracion'
    ]

    const apartadoActual = computed(() =>
    paginas.findIndex(nombre => nombre === useRoute().name)
    )

    const puedeIrAtras = computed(() => apartadoActual.value > 0)
    const puedeIrAdelante = computed(() => apartadoActual.value < paginas.length - 1)

    const irAtras = () => {
    if (puedeIrAtras.value) {
        router.push({ name: paginas[apartadoActual.value - 1] })
    }
    }

    const irAdelante = () => {
    if (puedeIrAdelante.value) {
        router.push({ name: paginas[apartadoActual.value + 1] })
    }
    }

    const irAPaginaTrabajos = () => {
    router.push({ path: '/', hash: '#trabajos' });
    };

    return {
        puedeIrAdelante,
        puedeIrAtras,
        irAtras,
        irAdelante,
        irAPaginaTrabajos
    }
}

