
import { ref, computed } from 'vue'

export function listaDetalles<T>(lista: T[], porPagina = 2) {

  const paginaActual = ref(1)

  const totalPaginas = Math.ceil(lista.length / porPagina)

  const listaPaginada = computed(() => {
    const inicio = (paginaActual.value - 1) * porPagina
    const fin = inicio + porPagina
    return lista.slice(inicio, fin)
  })

  function irALaPagina(pagina: number) {
    if (pagina >= 1 && pagina <= totalPaginas) {
      paginaActual.value = pagina
    }
  }

  return {
    paginaActual,
    totalPaginas,
    listaPaginada,
    irALaPagina
  }
}