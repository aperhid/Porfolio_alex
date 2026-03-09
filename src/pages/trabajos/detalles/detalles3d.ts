
export interface detalles3d {
    id: number
    explicacion: string
    bocetos: string[]
    proceso: string[]
    resultado: string[]
  
}


export const Detalles3d: detalles3d[] = [
    {
        id: 0,
        explicacion: 'La creación de este juego de mesa surge con el objetivo de brindar apoyo emocional a las personas mediante dinámicas que fomentan la reflexión, la expresión y la conexión personal. Cada elemento del juego está pensado para generar experiencias que promuevan la empatía, el autoconocimiento y la gestión de emociones de manera lúdica.\n\nUna parte central del trabajo fue diseñar las figuras del juego en 3D, las cuales representan una emoción distinta. Primero, se modelaron en Blender, cuidando cada detalle para que fueran atractivas y simbólicas, reflejando la intención emocional de cada pieza. Posteriormente, se llevaron esos modelos al mundo físico mediante impresion 3d, seleccionando los materiales y acabados adecuados que aseguraron la creación de unas piezas especiales.',
        bocetos: ['3d_boceto_1.1.png', '3d_boceto_1.2.png', '3d_boceto_1.3.png', '3d_boceto_1.4.png', '3d_boceto_1.5.png', '3d_boceto_1.6.png'],
        proceso: ['proceso_1.1.png', 'proceso_1.2.png', 'proceso_1.3.png', 'proceso_1.4.png', 'proceso_1.5.png', 'proceso_1.6.png', 'proceso_impresion.png'],
        resultado: ['3d_resultado_1.1.png', '3d_resultado_1.2.png', '3d_resultado_1.3.png', '3d_resultado_1.4.png', '3d_resultado_1.5.png', '3d_resultado_1.6.png', '3d_resultadofinal.png']   
    },
    {
        id: 1,
        explicacion: 'La creación de este anillo de compromiso se realizó completamente en Blender, con especial atención al modelado detallado del aro y la colocación de las piedras incrustadas para que cada elemento fuera preciso y elegante. Durante el proceso, trabajé cuidadosamente las texturas, los materiales y el renderizado, ajustando la luz y los reflejos del diamante central para lograr un acabado realista, uno donde destacara tanto el brillo de las gemas como el pulido del metal.\n\nEl resultado final es una representación digital fiel y visualmente atractva del anillo con su caja aterciopelada, lista para presentaciones o propuestas de diseño.',
        bocetos: [],
        proceso: ['3d_proceso_2.1.png', '3d_proceso_2.2.png', '3d_proceso_2.3.png'],
        resultado: ['3d_resultado_2.1.png', '3d_resultado_2.2.png', '3d_resultado_2.3.png']  
    },
    {
        id: 2,
        explicacion: 'En mi participación en 36 Days of Type, exploré la tipogradía a través de la inspiración marina, creando tres letras únicas completamente en Blender. Cada una cuenta su propia historia:\nLa S se transforma en un pulpo cuyos tentáculos se enroscan y se despliegan de manera orgánica, transmitiendo movimiento y vida. La V imita la compleja estructura de un coral, mostrando texturas irregulares y dormas que recuerdan a la riqueza del mar. La O evoca la suavidad porosa de una esponja marina.\n\nPara lograr un realismo convincente, combiné texturas digitales con escaneos de materiales reales: una red, una esponja y un plástico. Las tres usadas para el fondo. Además, se cuidó cada detalle lumínico y de renderizado para que la luz interactuara con las formas de manera natural.\nEste proyecto no solo destaca la creatividad en el modelado 3D, sino también la capacidad de fusionar arte, textura y luz, transportando al espectador a un universo submarino con cada letra.',
        bocetos: ['3d_boceto_letras.png'],
        proceso: ['3d_proceso_3.1.png', '3d_proceso_3.2.png', '3d_proceso_3.3.png'],
        resultado: ['3d_resultado_3.1.png', '3d_resultado_3.2.png', '3d_resultado_3.3.png']   
    },
    {
        id: 3,
        explicacion: 'En este proyecto de escultura se creó una figura decorativa con forma de pulpo utilizando exclusivamente Sculpey. La pieza se inició con un esqueleto de alambre y papel de aluminio que establecía la postura, el volumen y la estructura general del cuerpo, sobre el cual se trabajó la masa. Después, se alisó la superficie y se modeló cuidadosamente cada detalle para lograr un resultado realista. La anatomía del pulpo fue estudiada con tal de reflejar proporciones auténticas y transmitir dinamismo en los tentáculos y la postura del cuerpo.\n\nUna vez finalizada el modelado, la figura se horneó siguiendo las indicaciones del material y se pintó a mano con tonos azules y matices dorados, resaltando texturas y creando un efecto decorativo elegante. Cada etapa del proceso, desde la planificación hasta el acabado final, buscó combinar realismo anatómico y expresión artística, logrando una escultura que es tanto visualmente atractiva como técnicamente detallada.',
        bocetos: ['boceto_pulpo.png', '3d_boceto_pulpo.png'],
        proceso: ['3d_proceso_pulpo5.png', '3d_proceso_pulpo4.png', '3d_proceso_pulpo2.png'],
        resultado: ['3d_resultado_pulpo.png', '3d_resultado_pulpo2.png']   
    }
]