

export interface proyecto3d {
    id: number
    titulo: string
    imagen: string
  
}

export interface proyectoGrafico {
    id: number
    titulo: string
    imagen: string
  
}



export interface proyectoIlustracion {
    id: number
    titulo: string
    imagen: string
  
}

export interface logotipo {
    imagen: string
}



export const Trabajo3d: proyecto3d[] = [
    {
        id: 0,
        titulo: 'MOOD',
        imagen:'portada_mood.png',
       
    },
    {
        id: 1,
        titulo: 'Anillo de compromiso',
        imagen:'portada_anillo.png',
       
    },
    {
        id: 2,
        titulo: '36 days of type',
        imagen:'gif_portada_tipo.gif',
       
    },
    {
        id: 3,
        titulo: 'Escultura pulpo',
        imagen:'portada_pulpo.png',
       
    },
     

    
];




export const trabajoGrafico: proyectoGrafico[] = [
    {
        id: 0,
        titulo: 'Cartel Macbeth',
        imagen:'cartel_teatral.png',
       
    },
    {
        id: 1,
        titulo: 'Cartel Envidia',
        imagen:'cartel_teatro.png',
       
    },
    {
        id: 2,
        titulo: 'Cartel CREFAD',
        imagen:'cartel_CREFAD.png',
       
    },
    {
        id: 3,
        titulo: 'Revista editorial',
        imagen:'portada_revista.png',
       
    }
     

    
];



export const trabajoIlustracion: proyectoIlustracion[] = [
    {
        id: 0,
        titulo: 'Ilustración narrativa',
        imagen:'portada_narrativa.png',
       
    },
    {
        id: 1,
        titulo: 'Ilustracion conceptual',
        imagen:'portada_conceptual.png',
       
    },
    {
        id: 2,
        titulo: 'Cómic',
        imagen:'portada_comic.png',
       
    },
    {
        id: 3,
        titulo: 'Campaña publicitaria',
        imagen:'portada_campaña.png',
       
    },
     

    
];

export const imagenLogo: logotipo[] = [
    {
        imagen:'logotipoBlanco.png',  
    }
     
];