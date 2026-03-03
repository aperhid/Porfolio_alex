
export interface logotipo {
    imagen: string
}

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





export const trabajo3d: proyecto3d[] = [
    {
        id: 0,
        titulo: 'MOOD',
        imagen:'homer-s.png',
       
    },
    {
        id: 1,
        titulo: 'Anillo de compromiso',
        imagen:'homer-s.png',
       
    },
    {
        id: 0,
        titulo: '36 days of type',
        imagen:'homer-s.png',
       
    },
     

    
];




export const trabajoGrafico: proyectoGrafico[] = [
    {
        id: 0,
        titulo: 'Abe Simpson',
        imagen:'homer-s.png',
       
    },
     

    
];



export const trabajoIlustracion: proyectoIlustracion[] = [
    {
        id: 0,
        titulo: 'homer',
        imagen:'homer-s.png',
       
    },
     

    
];

export const imagenLogo: logotipo[] = [
    {
        imagen:'logotipoBlanco.png',  
    }
     

    
];