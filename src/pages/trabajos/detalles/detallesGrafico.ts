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
        explicacion: 'explicacion grafico 1',
        bocetos: ['bocetos grafico 1'],
        proceso: ['proceso grafico 1'],
        resultado: ['resultado grafico 1']   
    },
    {
        id: 1,
        explicacion: 'explicacion grafico 2',
        bocetos: ['bocetos grafico 2'],
        proceso: ['proceso grafico 2'],
        resultado: ['resultado grafico 2']   
    },
    {
        id: 2,
        explicacion: 'explicacion grafico 3',
        bocetos: ['bocetos grafico 3'],
        proceso: ['proceso grafico 3'],
        resultado: ['resultado grafico 3']   
    },
    {
        id: 3,
        explicacion: 'explicacion grafico 4',
        bocetos: ['bocetos grafico 4'],
        proceso: ['proceso grafico 4'],
        resultado: ['resultado grafico 4']  
    }
]