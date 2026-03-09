export interface detallesGrafico {
    id: number
    explicacion: string
    bocetos: string[]
    proceso: string[]
    resultado: string[]
}

export const DetallesGrafico: detallesGrafico[] = [
    {
        id: 0,
        explicacion: 'En este proyecto se diseñó un cartel para la obra Macbeth con un enfoque en composición y simplicidad, buscando transmitir un mensaje potente con un único elemento visual. La ilustración central es una mancha de sangre con forma de corona, creada inicialmente de manera manual con tinta china, capturando la textura y la fluidez natural de la tinta. Posteriormente, realicé retoques digitales para integrarla perfectamente en el cartel, ajustando forma, color y contraste.\n\nLa tipografía utilizada es serifa, escogida para aportar elegancia y solidez al mensaje, mientras que la composición se mantiene limpia y centrada, permitiendo que la ilutración sea el foco de atención. Este trabajo combina tradición manual y técnicas digitales, logrando un cartel que comunica de forma directa y visualmente impactante la esencia dramática de Macbeth.',
        bocetos: ['grafico_boceto_macbeth.png', 'grafico_boceto_macbeth2.png'],
        proceso: ['grafico_proceso_macbeth.png', 'grafico_proceso_macbeth2.png'],
        resultado: ['grafico_resultado_macbeth.png']   
    },
    {
        id: 1,
        explicacion: 'En este proyecto se desarrolló una serie de carteles para una obra inventada e inspirada en los pecados capitales, siendo la envidia el pecado escogido. Cada cartel busca capturar la esencia de la envidia a través de elementos visuales como miradas recelosas, tonos verdes, espirales hipnóticas y texturas rasposas.\n\nEl trabajo prestó especial atención a la composición y la retícula, asegurando equilibrio y fuerza visual en cada pieza. La tipografía fue meticulosamente elegida para reforzar la atmósfera de cada cartel, mientras que la combinación de fotografía, texturas digitales yy geometría permitió crear imágenes impactantes, coherentes y envolventes. Todo el protecto fue realizado de manera digital, buscando transmitir de forma poderosa y clara la sensción de envidia a través de cada detalle visual.',
        bocetos: [],
        proceso: ['grafico_proceso_envidia.png', 'grafico_proceso_envidia2.png', 'grafico_proceso_envidia3.png'],
        resultado: ['grafico_resultado_envidia1.jpg', 'grafico_resultado_envidia2.jpg', 'grafico_resultado_envidia3.jpg']   
    },
    {
        id: 2,
        explicacion: 'En este proyecto real para CREFAD Valencia, se desarrolló un cartel tipográfico en el que el diseño se centra en la composición, la retícula y la manipulación de las letras en 3D. Se buscó un equilibrio visual dinámico, jugando con la profundidad de las tipografías y la interacción entre las formas con tal de crear un cartel llamativo y moderno.\n\nLa paleta de colores combinó azul y amarillo, reflejando la identidad visual de CREFAD, mientras que las texturas se incorporaron para aportar riqueza visual y tacto digital a las letras. Todo el trabajo se realizó con cuidado en la composición y la jerarquía tipográfica, asegurando que cada elemento contribuyera a un mensaje claro, potente y atractivo. El resultado final es un cartel moderno, tridimensional y coherente, que destaca tanto por su creatividad como por su profesionalidad en la ejecución.',
        bocetos: ['grafico_boceto_crefad.png'],
        proceso: [],
        resultado: ['grafico_resultado_crefad.png']   
    },
    {
        id: 3,
        explicacion: 'En este proyecto desarrollé una revista tipográfica centrada en la salud mental de los diseñadores, con un enfoque editorial muy cuidado. La composición fue meticulosa, siguiendo estrictamente las reglas del diseño editorial para lograr un resultado limpio, ordenado y fácil de leer.\n\nEl font pairing fue cuidadosamente seleccionado para transmitir claridad y jerarquía visual, mientras que el uso de una única tinta turquesa en los detalles permitió crear contraste y cohesión sin sobrecargar las páginas. Este proyecto combina tipografía, composición y diseño editorial, mostrando cómo un enfoque minimalista y controlado puede comunicar de manera efectiva un tema sensible y relevante para la comunidad de diseñadores.',
        bocetos: [],
        proceso: ['grafico_proceso_revista.png', 'grafico_proceso_revista5.png', 'grafico_proceso_revista2.png', 'grafico_proceso_revista3.png', 'grafico_proceso_revista4.png'],
        resultado: ['grafico_resultado_revista1.png', 'grafico_resultado_revista6.png', 'grafico_resultado_revista2.png', 'grafico_resultado_revista3.png', 'grafico_resultado_revista4.png']  
    }
]